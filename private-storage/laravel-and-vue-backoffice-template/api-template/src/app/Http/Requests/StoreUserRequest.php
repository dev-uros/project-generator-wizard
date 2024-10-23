<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
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
            'name'=>'required|string|max:255|min:3',
            'surname'=>'required|string|max:255|min:3',
            'email'=>'required|max:255|min:3|unique:users,email|email:rfc,dns'
        ];
    }

    public function messages()
    {
        return[
            'name.required'=>'Ime korisnika je obavezno',
            'name.max'=>'Ime korisnika može imati maksimalno 255 karaktera',
            'name.min'=>'Ime korisnika mora imati barem 3 karaktera',
            'surname.required'=>'Prezime korisnika je obavezno',
            'surname.max'=>'Prezime korisnika može imati maksimalno 255 karaktera',
            'surname.min'=>'Prezime korisnika mora imati barem 3 karaktera',
            'email.required'=>'E-mail korisnika je obavezan',
            'email.max'=>'E-mail korisnika može imati maksimalno 255 karaktera',
            'email.min'=>'E-mail korisnika mora imati barem 3 karaktera',
            'email.unique'=>'Uneta e-mail adresa korisnika već postoji',
            'email.email'=>'Uneta e-mail korisnika adresa nije validna e-mail adresa',
        ];
    }
}
