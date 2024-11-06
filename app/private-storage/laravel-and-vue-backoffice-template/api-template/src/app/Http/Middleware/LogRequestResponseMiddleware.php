<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class LogRequestResponseMiddleware
{

    public function handle($request, Closure $next)
    {
        $routeName = $request->route()->getName() ?? 'unnamed';
        $logChannel = 'custom_channel_' . $routeName;

        // Dynamically configure a custom channel
        config(['logging.channels.' . $logChannel => [
            'driver' => 'daily',
            'path' => storage_path('logs/' . $routeName . '/log.log'),
            'level' => 'info',
            'days' => 7
        ]]);

        // Use the configured channel for this log entry
        Log::channel($logChannel)->info('Request:', [
            'url' => $request->fullUrl(),
            'method' => $request->method(),
            'parameters' => $request->all(),
            'user'=>auth()->user() ?? null
        ]);

        // Pass the request to the next middleware in the pipeline
        $response = $next($request);

        // Log the response
        Log::channel($logChannel)->info('Response:', [
            'status' => $response->status(),
            'content' => json_decode($response->getContent(),true),
        ]);

        // Reset the configuration to avoid affecting subsequent requests
        config(['logging.channels.' . $logChannel => null]);

        return $response;
    }
}
