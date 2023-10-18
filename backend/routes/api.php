<?php

use App\Http\Controllers\WorkerController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ProcessController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Process;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('/workers', WorkerController::class);
Route::apiResource('/suppliers', SupplierController::class);
Route::apiResource('/processes', ProcessController::class);
Route::apiResource('/product', ProductController::class);