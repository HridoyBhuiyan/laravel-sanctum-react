<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use function Sodium\add;

class RegistrationVerificationMail extends Mailable
{
    use Queueable, SerializesModels;
    public $name ="";
    public $email ="";
    public $password ="";
    public $address ="";
    public $verificationCode ="";

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $password, $address, $verificationCode)
    {
        $this->name=$name;
        $this->email=$email;
        $this->password=$password;
        $this->address=$address;
        $this->verificationCode=$verificationCode;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Registration Verification Mail',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'verificationEmailTemplate',
            with: [
                'name'=>$this->name,
                'email'=>$this->email,
                'password'=>$this->password,
                'address'=>$this->address,
                'verificationCode'=>$this->verificationCode
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
