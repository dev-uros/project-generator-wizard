<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendErrorAlert extends Mailable
{
    use Queueable, SerializesModels;

    public $errorMessage;
    public $errorFile;
    public $errorLine;
    public $errorRouteName;
    public $enteredParameters;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($errorMessage, $errorFile, $errorLine, $errorRouteName, $enteredParameters)
    {
        $this->errorMessage = $errorMessage;
        $this->errorFile = $errorFile;
        $this->errorLine = $errorLine;
        $this->errorRouteName = $errorRouteName;
        $this->enteredParameters = $enteredParameters;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject('ГРЕШКА - АПЛИКАЦИЈА!!! Пријава грешке на серверу!');

        return $this->markdown('mail.send-error-alert', [
            'errorMessage' => $this->errorMessage, 'errorFile' => $this->errorFile, 'errorLine' => $this->errorLine, 'errorRouteName' => $this->errorRouteName,
            'errorTime'=>date('d.m.Y H:i:s'), 'user'=>auth()->user() ? auth()->user()->user_name : null, 'userId'=>auth()->user() ? auth()->user()->id : null, 'enteredParameters'=>$this->enteredParameters
        ]);
    }
}
