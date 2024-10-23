<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LogViewerController;
use App\Http\Controllers\SetSessionTimeOutPeriodController;
use App\Http\Controllers\SetUserAccountStateController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\LogRequestResponseMiddleware;
use App\Http\Middleware\LogUserAction;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('healthcheck', function () {
    return response()->json(['message' => 'server up']);
});

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('reset-password', [AuthController::class, 'resetPassword'])->name('reset-password');
    Route::post('forgot-password', [AuthController::class, 'forgotPassword'])->name('forgot-password');
    Route::post('activate-account', [AuthController::class, 'activateAccount'])->name('activate-account');
    Route::post('/auto-login', [AuthController::class, 'autoLogin'])->name('auto-login');
});
Route::middleware(['auth:sanctum', 'user.active', LogUserAction::class, LogRequestResponseMiddleware::class])->group(function () {
    Route::post('auth/logout', [AuthController::class, 'logout'])->name('logout')->withoutMiddleware(LogRequestResponseMiddleware::class);


    Route::prefix('administration')->group(function () {
        Route::prefix('users')->group(function () {
            Route::post('resend-activation-email/{user}', [UserController::class, 'manuallySendActivationEmail'])->name('users.send-activation-email');
            Route::patch('set-status/{user}', SetUserAccountStateController::class)->name('users.set-status');
            Route::get('index', [UserController::class, 'index'])->name('users.index');
            Route::post('store', [UserController::class, 'store'])->name('users.store');
            Route::patch('{user}/update', [UserController::class, 'update'])->name('users.update');
            Route::get('{user}/show', [UserController::class, 'show'])->name('users.show');
        });


    });


    Route::prefix('settings')->group(function () {
        Route::patch('session-timeout', SetSessionTimeOutPeriodController::class)->name('settings.session-timeout');
    });

    Route::prefix('log-viewer')->group(function () {
        Route::get('file-list', [LogViewerController::class, 'getFileList'])->name('log-viewer.get-files')->withoutMiddleware([LogUserAction::class, LogRequestResponseMiddleware::class]);
        Route::get('file', [LogViewerController::class, 'getFileContent'])->name('log-viewer.get-file')->withoutMiddleware([LogUserAction::class, LogRequestResponseMiddleware::class]);
    });

});
