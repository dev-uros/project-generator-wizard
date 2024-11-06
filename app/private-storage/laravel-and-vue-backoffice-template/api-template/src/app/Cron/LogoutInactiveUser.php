<?php

namespace App\Cron;

use App\Models\SanctumToken;
use App\Models\SessionTimeout;
use Carbon\Carbon;

class LogoutInactiveUser
{
    public function __invoke()
    {
        $timeoutPeriod = SessionTimeout::first()->timeout_period;
        SanctumToken::query()
            ->whereNotNull('last_used_at')
            ->each(function ($token) use ($timeoutPeriod) {
                if (Carbon::parse($token->last_used_at)->addMinutes($timeoutPeriod) < Carbon::now()) {
                    $token->delete();
                }
            });
    }
}
