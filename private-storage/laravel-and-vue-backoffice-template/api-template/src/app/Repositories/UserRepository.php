<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\Concerns\Has;

class UserRepository implements UserRepositoryInterface
{

    public function getByEmail($email)
    {
        return User::query()->where('email', $email)->first();
    }

    public function updateUserPassword($email, $password)
    {
        User::query()->where('email', $email)->update(['password'=>Hash::make($password)]);
    }

    public function activateUserAccount($email, $password)
    {
        User::query()->where('email', $email)->update([
           'password'=>Hash::make($password),
            'email_verified_at' => Carbon::now()->toDateTimeString(),
            'is_active' => true
        ]);
    }

    public function index($accountState)
    {
        return User::query()
            ->select('id', 'name', 'surname', 'email', 'is_active', 'is_admin')
            ->when($accountState != -1, function ($query) use ($accountState) {
                return $query->where('is_active', $accountState);
            })
            ->orderByRaw("CONCAT (name, ' ', surname)")
            ->get();
    }

    public function show($user)
    {
        return User::query()
            ->select('id', 'name', 'surname', 'email', 'is_active', 'is_admin')
            ->where('id', $user->id)
            ->first();
    }


    public function store($data)
    {
        return User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'password' => Hash::make(Str::random(64)),
            'is_admin'=>false,
            'is_active'=>false
        ]);
    }

    public function update($user, $data)
    {
        $user->update([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
        ]);
    }

    public function setAccountState($user)
    {
        $user->update(['is_active'=>!$user->is_active]);
    }


    public function getActiveAdmins()
    {
        return User::query()->where('is_admin', true)->where('is_active', true)->get();
    }

    public function getActiveUsers()
    {
        return User::query()->where('is_admin', false)->where('is_active', true)->get();
    }

    public function getById($id)
    {
        return User::query()->where('id', $id)->first();
    }

    public function getForContacts($user)
    {
        return User::query()
            ->select('id', 'name', 'surname')
            ->where('is_active', true)
            ->orderBy('name')
            ->orderBy('surname')
            ->get();
    }
}
