<?php

namespace App\Traits;

trait LogMessagesGenerator
{
    protected function setLogMessage($message)
    {
        $logMessages = app('logMessagesArray');

        $logMessages[] = $message;

        app()->instance('logMessagesArray', $logMessages);
    }

    protected function getLogMessages(){
        return app('logMessagesArray');
    }
}
