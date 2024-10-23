<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Chat extends Model
{
    use HasFactory;

    protected $table = 'chat';


    public function sender():HasOne
    {
        return $this->hasOne(User::class, 'id', 'message_from_user_id');
    }

    public function reciever():HasOne
    {
        return $this->hasOne(User::class, 'id', 'message_to_user_id');
    }

}
