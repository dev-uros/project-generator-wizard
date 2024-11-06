<?php

namespace App\Interfaces;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

interface UserRepositoryInterface
{
    public function getByEmail($email);

    public function updateUserPassword($email, $password);

    public function activateUserAccount($email, $password);

    public function index($accountState);

    public function show($user);

    public function store($data);

    public function update($user, $data);

    public function setAccountState($user);

    public function getActiveAdmins();

    public function getActiveUsers();

    public function getById($id);

    public function getForContacts($user);
}
