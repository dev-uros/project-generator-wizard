<?php

namespace Tests\Feature;

use App\Interfaces\SessionTimeoutRepositoryInterface;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Tests\Traits\ApiSignIn;

class AutoLoginTest extends TestCase
{

    use ApiSignIn;

    private SessionTimeoutRepositoryInterface $sessionTimeoutRepository;

    private string $autoLoginRequestUrl;

    public function setUp(): void
    {
        parent::setUp();

        $this->autoLoginRequestUrl = route('auto-login');

        $this->sessionTimeoutRepository = resolve(SessionTimeoutRepositoryInterface::class);
    }

    public function test_user_without_token_gets_session_terminated(): void
    {

        $request = $this->postJson($this->autoLoginRequestUrl);

        $request->assertOk();

        $request->assertJsonStructure([
           'data'=>[
               'message',
               'isUserSessionActive'
           ]
        ]);

        $request->assertJson([
            'data'=>[
                'message' => 'Sesija je istekla',
                'isUserSessionActive' => false
            ]
        ]);
    }

    public function test_user_can_autologin_with_valid_bearer_token(): void
    {

        $user = $this->signIn();

        $plainTextToken = $user->createToken('testing-token')->plainTextToken;

        $request = $this->withToken($plainTextToken)->postJson($this->autoLoginRequestUrl);

        $request->assertOk();

        $request->assertJsonStructure([
            'data'=>[
                'user',
                'sessionTimeout',
                'isUserSessionActive'
            ]
        ]);

        $request->assertJson([
            'data'=>[
                'user' => $user->toArray(),
                'sessionTimeout'=> $this->sessionTimeoutRepository->show(),
                'isUserSessionActive' => true
            ]
        ]);
    }

}
