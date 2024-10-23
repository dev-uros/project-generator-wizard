<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePermissionRequest extends FormRequest
{
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
            'name' => ['required', Rule::unique('permissions', 'name')->ignore($this->route('permission'))],
            'route_name' => ['required', Rule::unique('permissions', 'route_name')->ignore($this->route('permission'))],
            'is_menu_defining' => 'required|boolean'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Naiziv permisije je obavezan',
            'name.unique' => 'Unet naziv permisije već postoji',
            'route_name.required' => 'Naziv rute permisije je obavezan',
            'route_name.unique' => 'Unet naziv rute već postoji',
            'is_menu_defining.required' => 'Došlo je do greške',
            'is_menu_defining.boolean' => 'Došlo je do greške',
        ];
    }
}
