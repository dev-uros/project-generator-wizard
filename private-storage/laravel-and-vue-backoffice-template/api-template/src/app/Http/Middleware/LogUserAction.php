<?php

namespace App\Http\Middleware;

use App\Enum\NonLoggableRoutes;
use App\Jobs\StoreUserAction;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use ReflectionClass;
use Symfony\Component\HttpFoundation\Response;

class LogUserAction
{

    public function handle(Request $request, Closure $next): Response
    {
        $routeName = $request->route()->getName();

        if(!$routeName){
            throw ValidationException::withMessages([
               'routeName'=>'Ruta nije definisana!'
            ]);
        }

        $nonLoggableRoutes = collect((new ReflectionClass(NonLoggableRoutes::class))->getConstants());

        if(!$nonLoggableRoutes->contains($request->route()->getName())){
            dispatch(new StoreUserAction($request->route()->getName(), $request->user()->id, $request->ip()));
        }

        return $next($request);
    }
}
