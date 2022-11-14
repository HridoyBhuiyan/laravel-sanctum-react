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

        if ((User::where('name',$name)->count()==1) && ($password==$sourcePassword)){
            return "logged in";
        }


    }
}
