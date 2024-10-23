<?php

namespace App\Repositories;

use App\Interfaces\UserLoginLogRepositoryInterface;
use App\Models\UserLoginLog;

class UserLoginLogRepository implements UserLoginLogRepositoryInterface
{
    public function store($data)
    {
        UserLoginLog::create([
            'user_id'=>$data['user_id'],
            'ip'=>$data['ip']
        ]);
    }
}
