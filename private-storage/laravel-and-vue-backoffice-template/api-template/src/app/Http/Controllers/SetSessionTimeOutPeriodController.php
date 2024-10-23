<?php

namespace App\Http\Controllers;

use App\Http\Requests\SetSessionTimeOutPeriodRequest;
use App\Models\SessionTimeout;
use Illuminate\Http\Request;

class SetSessionTimeOutPeriodController extends Controller
{
    public function __invoke(SetSessionTimeOutPeriodRequest $request)
    {
        $sessionTimeout = SessionTimeout::first();
        $sessionTimeout->update(['timeout_period' => $request->validated()['timeout']]);

        return $this->succes('Uspešno ažurirano trajanje sesije',
            ['sessionTimeout' => $sessionTimeout]);
    }
}
