<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ForgotPasswordRequest extends FormRequest
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
            'email' => [
                'required', Rule::exists('users', 'email')->where(function ($query) {
                    return $query->where('is_active', true);
                }),
            ]
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'E-mail adresa je obavezna',
            'email.exists' => 'Uneta e-mail adresa ne postoji u našim rekordima',
        ];
    }
}
