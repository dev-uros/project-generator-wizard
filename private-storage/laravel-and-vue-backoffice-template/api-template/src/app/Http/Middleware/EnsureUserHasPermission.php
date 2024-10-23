<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureUserHasPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();

        if ($user->is_admin) {
            return $next($request);
        } else {
            $permission = $user->permissions()->where('route_name', $request->route()->getName())->first();
            if ($permission) {
                return $next($request);
            } else {
                abort(401, 'Niste autorizovani za akciju!');
            }
        }
    }
}
