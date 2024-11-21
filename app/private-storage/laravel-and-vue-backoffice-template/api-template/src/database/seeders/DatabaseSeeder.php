<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Import\DepotsImport;
use App\Import\DistributorsImport;
use App\Import\TransporterImport;
use App\Models\Application;
use App\Models\ApplicationModule;
use App\Models\Permission;
use App\Models\Role;
use App\Models\SessionTimeout;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Excel;
use App\Permissions\PermissionContainer;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::transaction(function () {
            SessionTimeout::create([
                'timeout_period' => 30
            ]);

            $users = [
                [
                    'name' => 'Admin',
                    'surname' => 'One',
                    'email' => 'admin_one@test.com',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('Lozinka123!'),
                    'is_active' => true,
                    'is_admin' => true,
                ],
                [
                    'name' => 'Admin',
                    'surname' => 'Two',
                    'email' => 'admin_two@test.com',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('VaviloNS1004!'),
                    'is_active' => true,
                    'is_admin' => true,
                ],
                [
                    'name' => 'Admin',
                    'surname' => 'Three',
                    'email' => 'admin_three@test.com',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('Bobasmrad2@'),
                    'is_active' => true,
                    'is_admin' => true,
                ],
                [
                    'name' => 'Admin',
                    'surname' => 'Four',
                    'email' => 'admin_four@test.com',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('Krompir123!'),
                    'is_active' => true,
                    'is_admin' => true,
                ]
            ];

            foreach ($users as $user) {
                User::create($user);
            }
        });
    }
}
