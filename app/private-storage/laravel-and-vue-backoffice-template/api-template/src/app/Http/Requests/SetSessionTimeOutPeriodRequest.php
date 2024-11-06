<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SetSessionTimeOutPeriodRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'timeout' => ['required', 'integer', 'gt:0']
        ];
    }

    public function messages()
    {
        return [
            'timeout.required' => 'Morate uneti vreme trajanja sesije',
            'timeout.integer' => 'Vreme trajanja sesije mora biti ceo broj',
            'timeout.gt' => 'Vreme trajanja sesije mora biti veće od 0'
        ];
    }
}
