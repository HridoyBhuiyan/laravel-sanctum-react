<?php

namespace App\Http\Controllers;

use App\Models\ProfileModel;
use App\Models\User;

class ProfileController extends Controller
{
    public function profileByID($id){
        $email = User::where('id',$id)->pluck('email');
        return ProfileModel::where('email', $email)->first();
    }
}
