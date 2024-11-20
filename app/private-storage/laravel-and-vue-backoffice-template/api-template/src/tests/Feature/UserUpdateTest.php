<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;
use Tests\Traits\ApiSignIn;

class UserUpdateTest extends TestCase
{

    use ApiSignIn;


    private string $updateUserUrl;

    private array $updateUserRequest;

    private User $user;

    public function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub

        $this->user = User::factory()->create();

        $this->updateUserRequest = [
          'name' => 'Updated User Name',
          'surname' => 'Updated User Surname',
          'email' => fake()->unique()->freeEmail
        ];

        $this->updateUserUrl = route('users.update', ['user'=>$this->user->id]);

    }

    public function test_unauthenticated_user_gets_401()
    {

        $request = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $request->assertUnauthorized();

    }

    public function test_cant_update_non_existent_user(): void
    {

        $this->signIn();

        $nonExistingUserUrl = route('users.update', ['user' => 10000]);

        $request = $this->patchJson($nonExistingUserUrl);

        $request->assertNotFound();
    }

    public function test_name_required_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['name'] = '';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika je obavezno'
        ]);


        $this->updateUserRequest['name'] = null;

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika je obavezno'
        ]);


        unset($this->updateUserRequest['name']);

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika je obavezno'
        ]);
    }

    public function test_name_min_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['name'] = 'ab';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika mora imati barem 3 karaktera'
        ]);

    }

    public function test_name_max_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['name'] = Str::random(300);

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika može imati maksimalno 255 karaktera'
        ]);

    }


    public function test_surname_required_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['surname'] = '';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika je obavezno'
        ]);


        $this->updateUserRequest['surname'] = null;

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika je obavezno'
        ]);


        unset($this->updateUserRequest['surname']);

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika je obavezno'
        ]);
    }

    public function test_surname_min_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['surname'] = 'ab';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika mora imati barem 3 karaktera'
        ]);

    }

    public function test_surname_max_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['surname'] = Str::random(300);

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika može imati maksimalno 255 karaktera'
        ]);

    }


    public function test_email_required_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['email'] = '';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika je obavezan'
        ]);


        $this->updateUserRequest['email'] = null;

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika je obavezan'
        ]);


        unset($this->updateUserRequest['email']);

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika je obavezan'
        ]);
    }

    public function test_email_min_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['email'] = 'ab';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika mora imati barem 3 karaktera'
        ]);

    }

    public function test_email_max_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['email'] = Str::random(300);

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika može imati maksimalno 255 karaktera'
        ]);

    }

    public function test_email_unique_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['email'] = User::query()->first()->email;

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'Uneta e-mail adresa korisnika već postoji'
        ]);

    }

    public function test_email_valid_validation():void
    {
        $this->signIn();

        $this->updateUserRequest['email'] = 'randomstringnotemail@gmaaal.com';

        $response = $this->patchJson(
            $this->updateUserUrl,
            $this->updateUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'Uneta e-mail korisnika adresa nije validna e-mail adresa'
        ]);

    }

    public function test_user_can_be_updated():void{
        $this->signIn();

        $request = $this->patchJson($this->updateUserUrl, $this->updateUserRequest);

        $request->assertOk();

        $request->assertJsonStructure([
            'message',
            'data'=>[
                'user'
            ]
        ]);

        $this->user->refresh();
        $request->assertJson([
            'message'=>'Uspešno ažuriran korisnik: '.$this->user->name.' '.$this->user->surname,
            'data'=>[
                'user'=>$this->user->toArray()
            ]
        ]);
    }

}