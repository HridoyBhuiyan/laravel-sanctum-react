<?php

use App\Http\Controllers\RegistrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Models\User;


//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/user', function (Request $request) {return $request->input('id');});


Route::post('/registration', [RegistrationController::class,'getRegistration'] );
Route::post('/login', [LoginController::class,'getLogin'] );
