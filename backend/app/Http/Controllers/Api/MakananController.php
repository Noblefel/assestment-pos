<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Http\Controllers\Controller;
use App\Models\Makanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class MakananController extends Controller
{
    public function all()
    {
        sleep(1);

        try {
            $makanan = Makanan::with('category')
                ->orderBy('nama', 'ASC')
                ->get();

            return $this->api($makanan, "data makanan berhasil diambil");
        } catch (Exception $e) {
            Log::error("MakananController (all): " . $e->getMessage());

            return $this->api(null, "maaf ada yg error", 500);
        }
    }
}
