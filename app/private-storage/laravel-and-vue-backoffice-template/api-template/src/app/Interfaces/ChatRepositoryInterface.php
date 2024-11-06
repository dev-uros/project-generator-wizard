<?php
namespace App\Interfaces;

interface ChatRepositoryInterface
{
    public function getChatMessages($fromUser);
}
