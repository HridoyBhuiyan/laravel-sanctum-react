<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class LoginController extends Controller
{
    public function getLogin(Request $request){
        $name = $request->input('username');
        $password = $request->input('password');
        $sourcePassword = Crypt::decrypt(User::where('name', $name)->pluck('password')->first());
        $user = User::where('name', $name)->first();


        if($user->hasVerifiedEmail()){

                if ((User::where('name',$name)->count()==1) && ($password==$sourcePassword)){
                $user = User::where('name', $name)->first();
                $userId = User::where('name',$name)->pluck('id')->first();
                $expireAt = now()->addMinute(60*24);
                $token = $user->createToken('auth_token', ['server:update'], $expireAt)->plainTextToken;

                return response()->json([
                    'id'=>$userId,
                    'token'=>$token,
                    'expire'=>$expireAt
                ]);
            }
        }

        else if (!$user->hasVerifiedEmail()){
            return response()->json([
                "message"=>"Email not verified"
            ], 201);
        }



    }
}
