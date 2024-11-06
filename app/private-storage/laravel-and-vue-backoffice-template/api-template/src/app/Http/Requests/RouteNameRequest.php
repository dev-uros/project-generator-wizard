<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RouteNameRequest extends FormRequest
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
            'route_name'=>'required|exists:permissions,route_name'
        ];
    }


    public function messages()
    {
        return[
            'route_name.required'=>'Ruta je obavezna',
            'route_name.exits'=>'Morate uneti postojecu rutu'
        ];
    }
}
