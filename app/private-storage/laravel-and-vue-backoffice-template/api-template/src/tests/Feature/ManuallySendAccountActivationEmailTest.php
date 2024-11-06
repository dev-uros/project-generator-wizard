<?php

namespace Tests\Feature;

use App\Interfaces\PasswordResetRepositoryInterface;
use App\Mail\WelcomeMail;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Tests\TestCase;
use Tests\Traits\ApiSignIn;

class ManuallySendAccountActivationEmailTest extends TestCase
{
    use ApiSignIn;

    private PasswordResetRepositoryInterface $passwordResetRepository;
    private string $manuallySendAccountActivationEmailUrl;

    private User $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->passwordResetRepository = resolve(PasswordResetRepositoryInterface::class);

        $this->user = User::factory()->create();

        $this->manuallySendAccountActivationEmailUrl = route('users.send-activation-email', ['user'=>$this->user->id]);


    }

    public function test_unauthenticated_user_gets_401(){

        $request = $this->postJson($this->manuallySendAccountActivationEmailUrl);

        $request->assertUnauthorized();

    }
    public function test_cant_send_email_to_non_existent_user(): void{

        $this->signIn();

        $nonExistingUserUrl = route('users.send-activation-email', ['user'=>10000]);

        $request = $this->postJson($nonExistingUserUrl);

        $request->assertNotFound();
    }

    public function test_email_is_sent(): void{

        Mail::fake();

        $this->signIn();

        $request = $this->postJson($this->manuallySendAccountActivationEmailUrl);

        $request->assertOk();

        $request->assertJsonStructure(['message']);

        $request->assertJson([
            'message' => 'E-mail uspešno poslat na adresu '.$this->user->email
        ]);

        Mail::assertSent(WelcomeMail::class, function (WelcomeMail $mail) {
            return $mail->hasTo($this->user->email);
        });


    }

    public function test_email_content(): void{

        $token = $this->generateManuallySendActivationEmailToken($this->user);

        $mailable = new WelcomeMail($this->user, $token);

        $mailable->assertSeeInHtml(config(
                'frontend-app.production_password_reset_url'
            ) . $token . '/?email=' . $this->user->email);
    }


    private function generateManuallySendActivationEmailToken(User $user): string{
        $newUserToken = Str::random(64);

        $this->passwordResetRepository->store($user->email, $newUserToken);

        return $newUserToken;
    }


}
