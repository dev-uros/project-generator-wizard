<?php

namespace App\Http\Controllers;

use App\Traits\ResponseWithHttpStatus;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class LogViewerController extends Controller
{
    use ResponseWithHttpStatus;

    public function getFileList()
    {
        $logDirectory = storage_path('logs');

        $directories = File::directories($logDirectory);
        $directoryNames = array_map('basename', $directories);

        $response = [];
        foreach ($directoryNames as $directory){
            $logFiles = File::allFiles(storage_path('logs/'.$directory));
            $logFileList = [];
            foreach ($logFiles as $file) {
                $logFileList[] = $file->getFilename();
            }
            $response[] = ['folder' => $directory, 'files' => $logFileList];
        }

        return $this->succes('Uspešno učitana lista logova', ['logs' => $response]);
    }

    public function getFileContent(Request $request)
    {

        $fileContents = File::get(storage_path('logs/' . $request->logFolder.'/'.$request->logFile));

        // Define regular expressions to extract timestamp, request, and response JSON
        $logEntryRegex = '/\[(.+?)\] ' . config('app.env') . '.INFO: Request: (.+?)\n\[(.+?)\] ' . config('app.env') . '.INFO: Response: (.+?)$/m';

        preg_match_all($logEntryRegex, $fileContents, $matches, PREG_SET_ORDER);

        $formattedLogs = [];

        foreach ($matches as $match) {
            $requestTimestamp = $match[1];
            $requestJson = $match[2];
            $responseTimestamp = $match[3];
            $responseJson = $match[4];

            // Parse timestamps using Carbon
            $requestTimestamp = Carbon::parse($requestTimestamp)->toDateTimeString();
            $responseTimestamp = Carbon::parse($responseTimestamp)->toDateTimeString();

            // Decode JSON strings
            $requestData = json_decode($requestJson, true);
            $responseData = json_decode($responseJson, true);

            $formattedLogs[] = [
                'request' => $requestData,
                'response' => $responseData,
                'request_timestamp' => $requestTimestamp,
                'response_timestamp' => $responseTimestamp,
            ];
        }

        return $this->succes('Uspešno učitan sadržaj fajla: ' . $request->fileName, ['logDetails' => $formattedLogs]);
    }
}
