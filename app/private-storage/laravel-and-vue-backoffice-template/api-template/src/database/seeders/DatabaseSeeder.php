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
                    'name' => 'Aleksa',
                    'surname' => 'Strbac',
                    'email' => 'aleksa.strbac@kentkart.rs',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('Lozinka123!'),
                    'is_active' => true,
                    'is_admin' => true,
                ],
                [
                    'name' => 'Predrag',
                    'surname' => 'Bijelić',
                    'email' => 'predrag.bijelic@kentkart.rs',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('VaviloNS1004!'),
                    'is_active' => true,
                    'is_admin' => true,
                ],
                [
                    'name' => 'Uroš',
                    'surname' => 'Minić',
                    'email' => 'uros.minic@kentkart.rs',
                    'email_verified_at' => Carbon::now(),
                    'password' => Hash::make('Bobasmrad2@'),
                    'is_active' => true,
                    'is_admin' => true,
                ],
                [
                    'name' => 'Marko',
                    'surname' => 'Bakić',
                    'email' => 'marko.bakic@kentkart.rs',
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
