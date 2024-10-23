<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionTimeout extends Model
{
    use HasFactory;

    protected $table = 'session_timeout';
}
