<?php

namespace App\Http\Controllers;

use App\Traits\ResponseWithHttpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ApiLogViewerController extends Controller
{
    use ResponseWithHttpStatus;

    public function getFolders()
    {

        try {
            $folders = File::directories(storage_path('logs/api'));

            $folders = array_map('basename', $folders);

            return $this->succes(data: [
                'logFolders' => $folders
            ]);
        }catch (\Exception $exception){
            throw ValidationException::withMessages(['message'=>'Trenutno nema sadržaja u logovima']);
        }
    }

    public function getFiles(Request $request)
    {

        $logFolder = $request->folderName;

        $files = File::files(storage_path('logs/api/' . $logFolder));

        $files = array_map(fn($file) => str_replace('log-', '', $file->getFilename()), $files);

        return $this->succes(data: [
            'logFiles' => $files
        ]);
    }

    public function getFileEntries(Request $request)
    {

        $logFile = storage_path('logs/api/' . $request->folderName . '/log-' . $request->fileName);

        $logContents = File::get($logFile);

        $logLines = explode(PHP_EOL, $logContents);

        $logEntries = [];


        foreach ($logLines as $line) {
            if (!empty($line)) {
                $returnArray = [];
                $logEntry = json_decode($line, true);
                $returnArray['requestId'] = $logEntry['context']['request_id'];
                $returnArray['method'] = $logEntry['context']['method'];
                $returnArray['status'] = $logEntry['context']['status'];
                $returnArray['userId'] = $logEntry['context']['user']['id'];
                $returnArray['user'] = $logEntry['context']['user']['name'] . ' ' . $logEntry['context']['user']['surname'];
                $returnArray['requestTimeStamp'] = $logEntry['context']['request_timestamp'];
                $returnArray['requestDate'] = $logEntry['context']['request_date'];
                $returnArray['requestTime'] = $logEntry['context']['request_time'];


                $logEntries[] = $returnArray;
            }
        }

        return $this->succes(data: [
            'logEntries' => $logEntries
        ]);
    }

    public function getEntryDetails(Request $request)
    {

        $logFile = storage_path('logs/api/' . $request->folderName . '/log-' . $request->fileName);

        $logContents = File::get($logFile);

        $logLines = explode(PHP_EOL, $logContents);

        $logEntry = null;


        foreach ($logLines as $line) {
            if (!empty($line)) {
                $jsonLogEntry = json_decode($line, true);
                if ($jsonLogEntry['context']['request_id'] === $request->requestId) {
                    $logEntry = $jsonLogEntry;
                    break;
                }
            }
        }

        return $this->succes(data: ['logEntryDetails' => $logEntry]);
    }
}
