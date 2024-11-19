<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LogViewerController;
use App\Http\Controllers\SetSessionTimeOutPeriodController;
use App\Http\Controllers\SetUserAccountStateController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\LogRequestResponseMiddleware;
use App\Http\Middleware\LogUserAction;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiLogViewerController;

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

        Route::prefix('api-logs')->group(function (){
            Route::get('folder-list', [ApiLogViewerController::class, 'getFolders'])->name('log-viewer.api-logs.folder-list')->withoutMiddleware([LogUserAction::class, LogRequestResponseMiddleware::class]);
            Route::get('file-list', [ApiLogViewerController::class, 'getFiles'])->name('log-viewer.api-logs.file-list')->withoutMiddleware([LogUserAction::class, LogRequestResponseMiddleware::class]);
            Route::get('file-entries', [ApiLogViewerController::class, 'getFileEntries'])->name('log-viewer.api-logs.file-entries')->withoutMiddleware([LogUserAction::class, LogRequestResponseMiddleware::class]);
            Route::get('entry-details', [ApiLogViewerController::class, 'getEntryDetails'])->name('log-viewer.api-logs.entry-details')->withoutMiddleware([LogUserAction::class, LogRequestResponseMiddleware::class]);
        });

    });


});
