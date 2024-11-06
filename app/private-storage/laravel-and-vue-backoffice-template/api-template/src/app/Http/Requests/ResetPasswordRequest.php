<?php

namespace App\Http\Requests;

use App\Interfaces\PasswordResetRepositoryInterface;
use App\Rules\CheckUserPasswordResetToken;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class ResetPasswordRequest extends FormRequest
{
    protected $stopOnFirstFailure = true;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email'=>['required', Rule::exists('users', 'email')->where(function ($query) {
                return $query->where('is_active', true);
            })],
            'password'=>['required', Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised()->letters(), 'confirmed'],
            'password_confirmation'=>'required',
            'token'=>['required',new CheckUserPasswordResetToken($this->email, resolve(PasswordResetRepositoryInterface::class))]
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'E-mail adresa je obavezna',
            'email.exists' => 'Uneta e-mail adresa ne postoji u našim rekordima',
            'password.required'=>'Morate uneti šifru',
            'password.confirmed'=>'Uneta šifra se ne podudara sa potvrdom šifre',
            'password_confirmation'=>'Morate uneti potvrdu šifre',
            'token'=>'Molimo napravite novi zahtev za resetovanje šifre'
        ];
    }
}
