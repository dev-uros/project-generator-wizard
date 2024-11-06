<?php

namespace Tests\Feature;

use App\Interfaces\SessionTimeoutRepositoryInterface;
use App\Models\User;
use Tests\TestCase;

class LoginTest extends TestCase
{

    private array $loginRequestData;

    private string $loginRequestUrl;

    private User $user;

    private SessionTimeoutRepositoryInterface $sessionTimeoutRepository;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();

        $this->loginRequestUrl = route('login');

        $this->loginRequestData = ['email'=>$this->user->email, 'password'=>'password'];

        $this->sessionTimeoutRepository = resolve(SessionTimeoutRepositoryInterface::class);
    }

    public function test_email_required_validation(): void
    {

        $this->loginRequestData['email'] = '';

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
           'email'=>'E-mail adresa je obavezna'
        ]);



        $this->loginRequestData['email'] = null;

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail adresa je obavezna'
        ]);


        unset($this->loginRequestData['email']);

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'E-mail adresa je obavezna'
        ]);
    }

    public function test_email_format_validation(): void
    {

        $this->loginRequestData['email'] = 'abcd';

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'Uneli ste neispravnu e-mail adresu'
        ]);

    }

    public function test_email_exists_validation(): void
    {

        $this->loginRequestData['email'] = 'nonexisting_email@gmail.com';

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'email'=>'Uneta e-mail adresa ne postoji u našim rekordima'
        ]);

    }

    public function test_password_required_validation():void
    {

        $this->loginRequestData['password'] = '';

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'password'=>'Šifra je obavezna'
        ]);



        $this->loginRequestData['password'] = null;

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'password'=>'Šifra je obavezna'
        ]);


        unset($this->loginRequestData['password']);

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'password'=>'Šifra je obavezna'
        ]);
    }

    public function test_password_hash_validation():void
    {

        $this->loginRequestData['password'] = 'incorrectPassword';

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertUnprocessable();

        $response->assertInvalid([
            'password'=>'Ne postoji korisnički nalog vezan za unetu e-mail adresu i šifru'
        ]);

    }

    public function test_success_response():void
    {

        $response = $this->postJson(
            $this->loginRequestUrl,
            $this->loginRequestData
        );

        $response->assertOk();

        $responseData = $response->json('data');

        $response->assertJsonStructure([
           'message',
           'data'=> [
               'user',
               'token',
               'sessionTimeout'
           ]
        ]);

        $response->assertJson([
            'message'=> 'Ulogovani ste',
            'data'=>[
                'user'=> $this->user->toArray(),
                'sessionTimeout'=> $this->sessionTimeoutRepository->show(),
                'token'=>$responseData['token']
            ]
        ]);

    }

}
