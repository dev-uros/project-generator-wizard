<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class DatabaseBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Automating daily backup';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        if (!Storage::exists('backup')) {
            Storage::makeDirectory('backup');
        }
        File::cleanDirectory(storage_path('app/backup'));
        $filename = "backup-" . Carbon::now()->format('Y-m-d') . ".gz";

        putenv('PGPASSWORD=' . env('DB_PASSWORD'));

        $command = "pg_dump --user=" . env('DB_USERNAME')
            . " --host=" . env('DB_HOST') . " " . env('DB_DATABASE')
            . " --clean  | gzip > " . storage_path() . "/app/backup/" . $filename;

        exec($command);

        putenv('PGPASSWORD');

        $this->info('Database backup created at: '. storage_path('app/backup'));
    }
}
