<?php

namespace App\Rules;

use App\Models\PasswordReset;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class ValidateUserAccountActivationToken implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(private $email)
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
        $activateAccount=PasswordReset::query()->where('email',$this->email)->orderBy('created_at','desc')->first();

        if ($activateAccount)
        {
            if (Hash::check($value,$activateAccount->token))
            {
                return true;
            }
            else
            {
                return false;

            }

        }
        else
        {
            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
