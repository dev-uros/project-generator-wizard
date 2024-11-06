<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public $user,public $token)
    {
        //
    }

    public function build()
    {
        return $this->markdown('mail.welcome-mail', [
            'user' => $this->user,
            'url' => App::environment('local') ?
                config(
                    'frontend-app.development_account_activation_url'
                ) . $this->token . '/?email=' . $this->user->email :
                config(
                    'frontend-app.production_account_activation_url'
                ) . $this->token . '/?email=' . $this->user->email
        ])->subject('Aktiviranje naloga');
    }
}
