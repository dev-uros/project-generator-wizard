<?php

namespace App\Jobs;

use App\Models\UserActionLog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class StoreUserAction implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(private readonly string $routeName, private int $userId, private string $ip)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        UserActionLog::create([
           'route_name'=>$this->routeName,
           'user_id'=>$this->userId,
           'ip_address'=>$this->ip
        ]);
    }
}
