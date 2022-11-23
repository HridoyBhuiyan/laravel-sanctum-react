<?php

use App\Http\Controllers\MailController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;


Route::get('/trafficCheck/{ip}',[VisitorController::class,'visitorInfo']);
Route::get('/profile/{id}', [ProfileController::class, "profileByID"])->middleware('auth:sanctum');
Route::post('/registration', [RegistrationController::class,'getRegistration'] );
Route::get('/registration/{verification}/{name}', [RegistrationController::class,'getVerification'] );
Route::post('/login', [LoginController::class,'getLogin'] );

Route::post('/getEmail',[MailController::class,'getEmail']);
Route::post('/sendEmail',[MailController::class,'sendEmail'])->middleware('auth:sanctum');

