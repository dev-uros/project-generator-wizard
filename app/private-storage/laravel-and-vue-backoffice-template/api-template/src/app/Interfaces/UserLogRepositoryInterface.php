<?php

namespace App\Interfaces;

use App\Models\User;

interface UserLogRepositoryInterface
{
    public function store(User $user, $authUserId);
}
