<?php

namespace Tests\Feature;

use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Tests\TestCase;
use Tests\Traits\ApiSignIn;

class UserStoreTest extends TestCase
{

    use ApiSignIn;

    private string $storeUserUrl;

    private array $storeUserRequest;

    public function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub

        $this->storeUserUrl = route('users.store');

        $this->storeUserRequest = [
          'name'=> fake()->name,
          'surname'=> fake()->lastName,
          'email'=>fake()->unique()->freeEmail
        ];
    }

    public function test_unauthenticated_user_gets_401()
    {

        $request = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $request->assertUnauthorized();

    }

    public function test_name_required_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['name'] = '';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika je obavezno'
        ]);


        $this->storeUserRequest['name'] = null;

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika je obavezno'
        ]);


        unset($this->storeUserRequest['name']);

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika je obavezno'
        ]);
    }

    public function test_name_min_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['name'] = 'ab';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika mora imati barem 3 karaktera'
        ]);

    }

    public function test_name_max_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['name'] = Str::random(300);

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'name'=>'Ime korisnika može imati maksimalno 255 karaktera'
        ]);

    }


    public function test_surname_required_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['surname'] = '';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika je obavezno'
        ]);


        $this->storeUserRequest['surname'] = null;

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika je obavezno'
        ]);


        unset($this->storeUserRequest['surname']);

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika je obavezno'
        ]);
    }

    public function test_surname_min_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['surname'] = 'ab';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika mora imati barem 3 karaktera'
        ]);

    }

    public function test_surname_max_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['surname'] = Str::random(300);

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'surname'=>'Prezime korisnika može imati maksimalno 255 karaktera'
        ]);

    }


    public function test_email_required_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['email'] = '';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika je obavezan'
        ]);


        $this->storeUserRequest['email'] = null;

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika je obavezan'
        ]);


        unset($this->storeUserRequest['email']);

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika je obavezan'
        ]);
    }

    public function test_email_min_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['email'] = 'ab';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika mora imati barem 3 karaktera'
        ]);

    }

    public function test_email_max_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['email'] = Str::random(300);

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail korisnika može imati maksimalno 255 karaktera'
        ]);

    }

    public function test_email_unique_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['email'] = User::query()->first()->email;

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'Uneta e-mail adresa korisnika već postoji'
        ]);

    }

    public function test_email_valid_validation():void
    {
        $this->signIn();

        $this->storeUserRequest['email'] = 'randomstringnotemail@gmaaal.com';

        $response = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'Uneta e-mail korisnika adresa nije validna e-mail adresa'
        ]);

    }

    public function test_new_user_can_be_created(): void{
        $this->signIn();

        $request = $this->postJson(
            $this->storeUserUrl,
            $this->storeUserRequest
        );

        $request->assertOk();

        $user = $request->json()['data']['user'];

        $request->assertJsonStructure([
           'message',
           'data'=>[
               'user'
           ]
        ]);

        $request->assertJson([
           'message'=> 'Uspešno kreiran korisnik: '.$user['name'].' '.$user['surname'],
            'data'=>[
                'user'=>$user
            ]
        ]);
        $this->assertDatabaseHas('users', $this->storeUserRequest);


    }

    public function test_email_is_sent(): void{

        Mail::fake();

        $this->signIn();

        $request = $this->postJson($this->storeUserUrl, $this->storeUserRequest);

        $request->assertOk();

        $user = $request->json()['data']['user'];

        Mail::assertSent(WelcomeMail::class, function (WelcomeMail $mail) use ($user) {
            return $mail->hasTo($user['email']);
        });


    }

}
