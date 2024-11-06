<?php

namespace App\Http\Controllers;

use App\Interfaces\UserActionLogRepositoryInterface;
use App\Interfaces\UserLogRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Jobs\ProcessLogs;
use App\Jobs\StoreUserActionLog;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SetUserAccountStateController extends Controller
{
    public function __construct(private UserRepositoryInterface $userRepository){}
    public function __invoke(User $user, Request $request){
        $this->userRepository->setAccountState($user);
        $accountState = $user->is_active ? 'reaktiviran' : 'deaktiviran';
        return $this->succes('Uspešno '.$accountState.' nalog  korisnika: '.$user->name. ' '. $user->surname, [
            'user'=>$user
        ]);
    }
}
