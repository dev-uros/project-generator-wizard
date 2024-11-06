<?php

namespace App\Repositories;

use App\Interfaces\UserLogRepositoryInterface;
use App\Models\User;
use App\Models\UserLog;

class UserLogRepository implements UserLogRepositoryInterface
{
    public function store(User $user, $authUserId)
    {
        UserLog::create([
            'user_id' => $user->id,
            'name' => $user->name,
            'surname' => $user->surname,
            'email' => $user->email,
            'is_active' => $user->is_active,
            'is_admin' => $user->is_admin,
            'updated_by_id' => $authUserId,
            'created_at' => $user->updated_at,
            'updated_at' => $user->updated_at
        ]);
    }
}
