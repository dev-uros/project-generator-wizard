<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActivateAccountRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\LoginUseRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Services\AuthService;
use App\Services\StoreUserLoginLogService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class AuthController extends Controller
{
    public function __construct(private readonly AuthService $authService)
    {
    }

    public function login(LoginUseRequest $request): JsonResponse
    {
        $loginData = $this->authService->login($request->validated(), $request->ip());

        return $this->succes('Ulogovani ste', data: [
            'user' => $loginData['user'],
            'token' => $loginData['token'],
            'sessionTimeout' => $loginData['sessionTimeout'],
            'userContacts'=>$loginData['userContacts']
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return $this->succes(message: 'Uspešno ste se izlogovali');
    }

    public function forgotPassword(ForgotPasswordRequest $request): JsonResponse
    {
        $this->authService->forgotPassword($request->validated());
        return $this->succes(message: 'Uspešno ste poslali zahtev za resetovanje šifre na e-mail adresu '.$request->get('email'));
    }

    public function resetPassword(ResetPasswordRequest $request): JsonResponse
    {
        $this->authService->resetPassword($request->validated());
        return $this->succes(message: 'Šifra uspešno resetovana, možete se ulogovati putem novogenerisane šifre i Vaše e-mail adrese: '.$request->get('email'));
    }

    public function activateAccount(ActivateAccountRequest $request): JsonResponse
    {
        $this->authService->activateAccount($request->validated());
        return $this->succes(message: 'Uspešno ste aktivirali nalog, možete se ulogovati putem izabrane šifre i Vaše e-mail adrese: '.$request->get('email'));
    }

    public function autoLogin(Request $request): JsonResponse
    {
        $userSessionExists = $this->authService->autoLogin($request);
        return $this->succes(data: $userSessionExists);
    }
}
