<?php

namespace App\Services;

use App\Interfaces\ChatRepositoryInterface;
use App\Interfaces\PasswordResetRepositoryInterface;
use App\Interfaces\SessionTimeoutRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Jobs\SendForgotPasswordMail;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Laravel\Sanctum\PersonalAccessToken;

class AuthService
{
    public function __construct(private UserRepositoryInterface           $userRepository,
                                private PasswordResetRepositoryInterface  $passwordResetRepository,
                                private SessionTimeoutRepositoryInterface $sessionTimeoutRepository,
                                private StoreUserLoginLogService          $loginLogService)
    {
    }

    public function login($data, $ip)
    {
        $user = $this->userRepository->getByEmail($data['email']);

        $this->loginLogService->handle(['user_id' => $user->id, 'ip' => $ip]);

        return [
            'token' => $user->createToken('app-token')->plainTextToken,
            'user' => $user,
            'sessionTimeout' => $this->sessionTimeoutRepository->show(),
            'userContacts' => $this->userRepository->getForContacts($user),
        ];
    }

    public function forgotPassword($data)
    {
        return DB::transaction(function () use ($data) {
            $user = $this->userRepository->getByEmail($data['email']);

            $newUserToken = Str::random(64);
            $this->passwordResetRepository->store($user->email, $newUserToken);

            dispatch(new SendForgotPasswordMail($user, $newUserToken));
        });
    }

    public function resetPassword($data)
    {
        DB::transaction(function () use ($data) {
            $this->userRepository->updateUserPassword($data['email'], $data['password']);
            $this->passwordResetRepository->deleteAllByEmail($data['email']);
        });
    }


    public function activateAccount($data)
    {
        return DB::transaction(function () use ($data) {
            $this->userRepository->activateUserAccount($data['email'], $data['password']);
            $this->passwordResetRepository->deleteAllByEmail($data['email']);
        });
    }

    public function autoLogin($request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $user = $token?->tokenable;

        if ($user) {
            $this->loginLogService->handle(['user_id' => $user->id, 'ip' => $request->ip()]);

            return [
                'user' => $user,
                'sessionTimeout' => $this->sessionTimeoutRepository->show(),
                'isUserSessionActive' => true,
                'userContacts' => $this->userRepository->getForContacts($user),

            ];
        } else {
            return ['message' => 'Sesija je istekla', 'isUserSessionActive' => false];
        }
    }

}
