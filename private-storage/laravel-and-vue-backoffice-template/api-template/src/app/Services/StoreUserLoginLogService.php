<?php
namespace App\Services;

use App\Interfaces\UserLoginLogRepositoryInterface;

class StoreUserLoginLogService
{
    public function __construct(private readonly UserLoginLogRepositoryInterface $userLoginLogRepository){}
    public function handle($data): void{
        $this->userLoginLogRepository->store($data);
    }
}
