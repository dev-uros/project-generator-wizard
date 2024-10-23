<?php

namespace App\Interfaces;

interface PasswordResetRepositoryInterface
{
    public function findLatestByEmail($email);

    public function deleteAllByEmail($email);

    public function store($email, $token);
}
