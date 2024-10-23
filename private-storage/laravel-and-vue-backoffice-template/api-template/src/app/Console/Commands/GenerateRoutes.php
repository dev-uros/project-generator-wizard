<?php

namespace App\Console\Commands;

use App\Enum\NonLoggableRoutes;
use App\Models\RouteList;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use ReflectionClass;

class GenerateRoutes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:routes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates routes table';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $currentTime = Carbon::now();
        $nonLoggableRoutes = collect((new ReflectionClass(NonLoggableRoutes::class))->getConstants());

        $routes = Route::getRoutes();

        $generatedRouteList = collect($routes->getRoutes())->map(function ($route) use ($nonLoggableRoutes) {

            $routeName = $route->getName();
            if (Str::startsWith($routeName, 'sanctum')) {
                return null;
            }

            if (Str::startsWith($routeName, 'ignition')) {
                return null;
            }

            if ($nonLoggableRoutes->contains($routeName)) {
                return null;
            }

            return $routeName;
        })->filter()->toArray();

        $formattedRoutes = [];

        foreach ($generatedRouteList as $route){
            $formattedRoutes[] = ['route_name' => $route, 'created_at' => $currentTime, 'updated_at' => $currentTime];
        }

        DB::transaction(function () use ($formattedRoutes){
            RouteList::query()->truncate();
            RouteList::insert($formattedRoutes);
        });

        $this->info('Route list table generated!');
    }
}
