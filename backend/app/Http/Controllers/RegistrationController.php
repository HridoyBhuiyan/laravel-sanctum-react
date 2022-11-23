<?php

namespace App\Http\Controllers;

use App\Mail\RegistrationVerificationMail;
use App\Models\ProfileModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    function generateRandomString($length) {
        return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
    }


    function getRegistration(Request $request){

        $name = $request->input('username');
        $email = $request->input('email');
        $password = $request->input('password');
        $address = $request->input('address');
        $verificationCode = $this->generateRandomString(13);

        if (ProfileModel::where(['name'=>$name, 'email'=>$email])->count()==0){
            $validation = Validator::make($request->all(),[
                'username'=>'required',
                'email'=>'required|email',
                'password'=>'required',
                'address'=>'required'
            ]);

            if (!$validation->fails()){
                $makeUser = User::insert([
                    'name'=>$name,
                    'email'=>$email,
                    'password'=>Crypt::encrypt($password),
                    'created_at'=>date('Y-m-d H:i:s'),
                    "remember_token"=>$verificationCode
                ]);



                Mail::to($email)->send(new RegistrationVerificationMail($name, $email, $password, $address, $verificationCode));


                if ($makeUser){
                    $profile = ProfileModel::insert([
                        'name'=>$name,
                        'email'=>$email,
                        'address'=>$address
                    ]);

                    if ($profile){
                        return "Profile make";
                    }
                }
            }
        }


        else return 'User exist';
    }


    public function getVerification($verification, $name){
        $user = User::where('name',$name)->first();
        if ($user->exists()){

            $verificationFromSource = User::where('name', $name)->pluck('remember_token')->first();

            if (! $user->hasVerifiedEmail()){
                if ($verificationFromSource==$verification){
                    User::where('name',$name)->update(['email_verified_at'=> now()]);
                    return 'verified user';
                }

                else{return "Wrong verification Link";}
            }

            else{return "Already a member";}

        }

        else return "user not found";

    }

}
