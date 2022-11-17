<?php

use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Models\User;


//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Route::post('/user', function (Request $request) {return $request->input('id');});
//Route::get('/user', function (Request $request) {
//    User::all();
//});

Route::get('/trafficCheck/{ip}',[VisitorController::class,'visitorInfo']);

Route::post('/registration', [RegistrationController::class,'getRegistration'] );
//Route::get('/registration', function(){
//    return"works";
//});
Route::post('/login', [LoginController::class,'getLogin'] );
