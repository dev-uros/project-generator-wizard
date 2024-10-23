<?php

namespace App\Rules;

use App\Interfaces\PasswordResetRepositoryInterface;
use App\Models\PasswordReset;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class CheckUserPasswordResetToken implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(public $email, private PasswordResetRepositoryInterface $passwordResetRepository )
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $passwordReset= $this->passwordResetRepository->findLatestByEmail($this->email);

        return Hash::check($value,$passwordReset->token);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Molimo napravite novi zahtev za resetovanje šifre';
    }
}
