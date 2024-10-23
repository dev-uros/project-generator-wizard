<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

trait ResponseWithHttpStatus
{
    protected function succes(string $message = '', array $data = [], int $httpStatus = 200): JsonResponse
    {
        return response()->json([
            'message' => $message,
            'data' => $data
        ], $httpStatus);
    }

    protected function downloadFile($path, $fileName){
        return response()->file($path,[
            'File-Name'=>$fileName
        ]);
    }

}
