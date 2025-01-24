<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    public function all()
    {
        sleep(1);

        try {
            $category = Category::all();

            return $this->api($category, "data category berhasil diambil");
        } catch (Exception $e) {
            Log::error("CategoryController (all): " . $e->getMessage());

            return $this->api(null, "maaf ada yg error", 500);
        }
    }
}
