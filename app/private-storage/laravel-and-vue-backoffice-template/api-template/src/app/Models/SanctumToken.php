<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SanctumToken extends Model
{
    use HasFactory;
    protected $connection = 'pgsql';
    protected $table='personal_access_tokens';
}
