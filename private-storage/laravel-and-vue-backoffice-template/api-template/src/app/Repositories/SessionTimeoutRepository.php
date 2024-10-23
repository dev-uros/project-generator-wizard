<?php
namespace App\Repositories;

use App\Interfaces\SessionTimeoutRepositoryInterface;
use App\Models\SessionTimeout;

class SessionTimeoutRepository implements SessionTimeoutRepositoryInterface
{
    public function show()
    {
        return SessionTimeout::first()->timeout_period;
    }
}
