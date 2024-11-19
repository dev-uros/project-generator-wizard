<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Monolog\Formatter\JsonFormatter;
use Symfony\Component\HttpFoundation\Response;

class LogRequestResponseMiddleware
{

    public function handle($request, Closure $next)
    {
        $routeName = $request->route()->getName() ?? 'unnamed';
        $routeUri = $request->route()->uri();
        $logChannel = 'custom_channel_' . $routeName;

        // Dynamically configure a custom channel
        config(['logging.channels.' . $logChannel => [
            'driver' => 'daily',
            'path' => storage_path('logs/api/' . $routeName . '('.str_replace('/', '-',$routeUri).')/log.log'),
            'level' => 'info',
            'days' => 7,
            'formatter' => JsonFormatter::class, // Use custom formatter for JSON output
        ]]);

        // Prepare the request log data
        $requestId = Str::uuid()->toString(). '-'.\Carbon\Carbon::now()->format('YmdHis');
        $requestTimestamp = Carbon::now()->format('Y-m-d H:i:s');
        $requestDate = Carbon::now()->format('Y-m-d');
        $requestTime = Carbon::now()->format('H:i:s');
        $logData = [
            'url' => $request->fullUrl(),
            'method' => $request->method(),
            'parameters' => $request->all(),
            'user' => auth()->user() ?? null,
            'queries' => [], // This will hold the DB queries later
            'additional_messages' => [],
            'error_details'=>[],
            'request_timestamp'=>$requestTimestamp,
            'request_date'=>$requestDate,
            'request_time'=>$requestTime,
            'request_id'=>$requestId
        ];

        // Listen for queries and capture them

        // Pass the request to the next middleware
        $response = $next($request);

        // Add response data to the log
        $logData['status'] = $response->status();
        $logData['queries'] = app('executedQueries');
        $logData['additional_messages'] = app('logMessagesArray');
        // If status is 500, log as an error
        if ($response->status() == 500) {
            $logData['error_details'] = $response->exception;
            Log::channel($logChannel)->error('Internal Server Error', $logData);
        }else{
            $logData['content'] = json_decode($response->getContent(), true);

            // Log the response along with the queries
            Log::channel($logChannel)->info('1', $logData);
        }


        config(['logging.channels.' . $logChannel => null]);

        return $response;
    }
}
