<?php

namespace App\Http\Controllers;

use App\Models\ProfileModel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    function getRegistration(Request $request){
        $name = $request->input('username');
        $email = $request->input('email');
        $password = $request->input('password');
        $address = $request->input('address');

        if (ProfileModel::where('name',$name)->count()==0){
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
                    'password'=>Crypt::encrypt($password)
                ]);



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
}
