<?php

namespace App\Exceptions;

use App\Mail\SendErrorAlert;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function report(Throwable $exception)
    {


        if (App::environment('production')) {
            if ($this->shouldReport($exception)) {
                $this->sendEmail($exception->getMessage(), $exception->getFile(), $exception->getLine(), request()->route() ? request()->route()->getName() : null,
                    Request::all() ? json_encode(Request::all()) : null);
            }
        }
        parent::report($exception);
    }


    public function sendEmail($errorMessage, $errorFile, $errorLine, $errorRouteName, $enteredParameters)
    {

        Mail::to('it@suprabit.rs')->cc(['developer@suprabit.rs', 'aleksa.strbac@kentkart.rs', 'marko.bakic@kentkart.rs'])->send(new SendErrorAlert($errorMessage, $errorFile, $errorLine, $errorRouteName, $enteredParameters));

    }
    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
