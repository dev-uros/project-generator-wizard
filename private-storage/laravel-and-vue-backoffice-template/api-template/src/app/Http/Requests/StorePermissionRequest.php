<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePermissionRequest extends FormRequest
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
            'name' => 'required|unique:permissions,name',
            'route_name' => 'required|unique:permissions,route_name',
            'is_menu_defining' => 'required|boolean',
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
