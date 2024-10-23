<?php

namespace App\Models;

use App\Traits\SerializeDate;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    use HasFactory, SerializeDate;

    protected $table = 'user_logs';

    public function updatedBy(){
        return $this->belongsTo(User::class, 'updated_by_id','id');
    }

    public function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->format('d.m.Y H:i:s')
        );
    }

    public function updatedAt(): Attribute
    {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->format('d.m.Y H:i:s')
        );
    }
}
