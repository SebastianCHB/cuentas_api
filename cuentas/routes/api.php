<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TransactionsController;
//EHDPOINT
Route::resource('accounts', AccountsController::class);
Route::resource('categories', CategoriesController::class);
Route::resource('transactions', TransactionsController::class);

Route::post('changestatus', [AccountsController::class, 'changeStatus']);

Route::post('/login',[AuthController::class, 'login']);



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
