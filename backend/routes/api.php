<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\MakananController;
use Illuminate\Support\Facades\Route;

Route::get("/makanan", [MakananController::class, 'all']);
Route::get("/category", [CategoryController::class, 'all']);
