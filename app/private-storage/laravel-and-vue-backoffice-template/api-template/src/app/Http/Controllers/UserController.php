<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use App\Services\UserService;
use App\Traits\ResponseWithHttpStatus;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct(private UserRepositoryInterface $userRepository,private UserService $userService){}

    public function index(Request $request)
    {
        return $this->succes(data: [
            'users'=>$this->userRepository->index($request->get('accountState'))
        ]);
    }

    public function show(User $user)
    {
        return $this->succes(data:[
            'user'=>$this->userRepository->show($user)
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $user = $this->userService->store($request->validated());


        return $this->succes('Uspešno kreiran korisnik: '.$user->name.' '.$user->surname, data: ['user'=>$user]);
    }

    public function update(User $user,UpdateUserRequest $request)
    {
        $this->userService->update($user,$request->validated());

        return $this->succes('Uspešno ažuriran korisnik: '.$user->name.' '.$user->surname, data: ['user'=>$user]);
    }

    public function manuallySendActivationEmail(User $user)
    {
        $this->userService->manuallySendWelcomeEmail($user);

        return $this->succes('E-mail uspešno poslat na adresu '.$user->email);
    }


}
