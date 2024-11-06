<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrderPositionRequest extends FormRequest
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
            'oldIndex' => 'required|exists:permissions,order_position',
            'newIndex' => 'required|exists:permissions,order_position',
            'targetedPermissionRouteName' => 'required|string|exists:permissions,route_name'
        ];
    }

    public function messages()
    {
        return [
            'oldIndex'=>'Došlo je do greške',
            'newIndex'=>'Došlo je do greške',
            'targetedPermissionRouteName'=>'Došlo je do greške'
        ];
    }
}
