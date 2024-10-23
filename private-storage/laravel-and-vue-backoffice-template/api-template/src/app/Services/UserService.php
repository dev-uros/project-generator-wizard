<?php

namespace App\Services;

use App\Interfaces\PasswordResetRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Jobs\SendUserCreationEmail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserService
{

    public function __construct(private UserRepositoryInterface $userRepository,
    private PasswordResetRepositoryInterface $passwordResetRepository)
    {
    }

    public function store($userData)
    {
        return DB::transaction(function () use ($userData) {
            $user = $this->userRepository->store($userData);


            $newUserToken = Str::random(64);
            $this->passwordResetRepository->store($user->email, $newUserToken);

            dispatch(new SendUserCreationEmail($user, $newUserToken));
            return $user->refresh();
        });
    }

    public function update($user,$userData)
    {
        return DB::transaction(function () use ($user,$userData)
        {
            $this->userRepository->update($user,$userData);

        });
    }
    public function manuallySendWelcomeEmail($user)
    {
        return DB::transaction(function () use ($user)
        {
            DB::table('password_resets')->where('email',$user->email)->delete();
            $newUserToken = Str::random(64);
            $this->passwordResetRepository->store($user->email, $newUserToken);

            dispatch(new SendUserCreationEmail($user, $newUserToken));
        });
    }
}
