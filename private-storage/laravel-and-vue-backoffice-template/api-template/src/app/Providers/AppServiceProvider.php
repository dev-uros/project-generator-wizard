<?php

namespace App\Providers;

use App\Interfaces\ChatRepositoryInterface;
use App\Interfaces\PasswordResetRepositoryInterface;
use App\Interfaces\SessionTimeoutRepositoryInterface;
use App\Interfaces\UserLoginLogRepositoryInterface;
use App\Interfaces\UserLogRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use App\Observers\UserObserver;
use App\Repositories\ChatRepository;
use App\Repositories\PasswordResetRepository;
use App\Repositories\SessionTimeoutRepository;
use App\Repositories\UserLoginLogRepository;
use App\Repositories\UserLogRepository;
use App\Repositories\UserRepository;
use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);

        $this->app->bind(PasswordResetRepositoryInterface::class, PasswordResetRepository::class);

        $this->app->bind(UserLogRepositoryInterface::class, UserLogRepository::class);

        $this->app->bind(SessionTimeoutRepositoryInterface::class, SessionTimeoutRepository::class);

        $this->app->bind(UserLoginLogRepositoryInterface::class, UserLoginLogRepository::class);

        $this->app->bind(ChatRepositoryInterface::class, ChatRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::unguard();
        User::observe(UserObserver::class);
    }
}
