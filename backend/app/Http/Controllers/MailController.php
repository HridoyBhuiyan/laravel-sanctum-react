<?php

namespace App\Http\Controllers;

use App\Mail\AdminToGeneralMail;
use App\Mail\GeneralMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{

    function getEmail(Request $request){
        $emailID = $request->input('emailID');
        $name = $request->input('name');
        $subject = $request->input('subject');
        $body = $request->input('body');

        Mail::to("hellohridoy007@gmail.com")->send(new GeneralMail($emailID, $name, $subject, $body));

    }

    public function sendEmail(Request $request){
        $mail= $request->input('mail');
        $subject= $request->input('subject');
        $body = $request->input('body');
        $result = Mail::to($mail)->send(new AdminToGeneralMail($subject, $body));
        return $result;
    }

}
