<?php

namespace App\Repositories;

use App\Interfaces\PasswordResetRepositoryInterface;
use App\Models\PasswordReset;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class PasswordResetRepository implements PasswordResetRepositoryInterface
{
    public function findLatestByEmail($email)
    {
        return PasswordReset::query()->where('email',$email)->orderBy('created_at','desc')->first();
    }

    public function deleteAllByEmail($email)
    {
        DB::table('password_resets')->where('email', $email)->delete();
    }

    public function store($email, $token)
    {
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => Hash::make($token),
            'created_at' => Carbon::now()->toDateTimeString()
        ]);
    }
}
