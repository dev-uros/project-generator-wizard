<?php

namespace App\Observers;

use App\Models\User;
use App\Models\UserLog;
use Illuminate\Contracts\Events\ShouldHandleEventsAfterCommit;

class UserObserver implements ShouldHandleEventsAfterCommit
{
    /**
     * Handle the User "created" event.
     */
    public function created(User $user): void
    {
        $this->storeLog($user);
    }

    /**
     * Handle the User "updated" event.
     */
    public function updated(User $user): void
    {
        $this->storeLog($user);
    }

    private function storeLog(User $user): void
    {
        $userLog = new UserLog();

        $userLog->user_id = $user->id;
        $userLog->name = $user->name;
        $userLog->surname = $user->surname;
        $userLog->email = $user->email;
        $userLog->is_admin = $user->is_admin;
        $userLog->is_active = $user->is_active;
        $userLog->updated_by_id = auth()->user()?->id ?? $user->id;

        $userLog->save();
    }
}
