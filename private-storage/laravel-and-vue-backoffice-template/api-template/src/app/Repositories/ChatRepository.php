<?php

namespace App\Repositories;

use App\Interfaces\ChatRepositoryInterface;
use App\Models\Chat;

class ChatRepository implements ChatRepositoryInterface
{
    public function getChatMessages($fromUser)
    {
        return Chat::query()
            ->where('message_from_user_id', $fromUser->id)
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
