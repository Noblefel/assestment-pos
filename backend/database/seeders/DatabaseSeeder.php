<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Makanan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $category = ["Cumi & Kerang",  "Sayuran", "Minuman", "Ikan"];

        foreach ($category as $c) {
            Category::create(["category" => $c]);
        }

        Makanan::create([
            "nama" => "Cumi Tepung",
            "harga" => 9000,
            "category_id" => 1,
        ]);

        Makanan::create([
            "nama" => "Cumi Bakar",
            "harga" => 11000,
            "category_id" => 1,
        ]);

        Makanan::create([
            "nama" => "Cumi Cabe",
            "harga" => 14000,
            "category_id" => 1,
        ]);

        Makanan::create([
            "nama" => "Cah Kailan",
            "harga" => 10000,
            "category_id" => 2,
        ]);

        Makanan::create([
            "nama" => "Tahu Goreng",
            "harga" => 7500,
            "category_id" => 2,
        ]);

        Makanan::create([
            "nama" => "Cah Taoge",
            "harga" => 8000,
            "category_id" => 2,
        ]);

        Makanan::create([
            "nama" => "Es teh",
            "harga" => 3000,
            "category_id" => 3,
        ]);

        Makanan::create([
            "nama" => "Kopi",
            "harga" => 4000,
            "category_id" => 3,
        ]);

        Makanan::create([
            "nama" => "Jus Buah",
            "harga" => 6000,
            "category_id" => 3,
        ]);

        Makanan::create([
            "nama" => "Gurame",
            "harga" => 14000,
            "category_id" => 4,
        ]);

        Makanan::create([
            "nama" => "Sarden",
            "harga" => 10000,
            "category_id" => 4,
        ]);

        Makanan::create([
            "nama" => "Tuna",
            "harga" => 25000,
            "category_id" => 4,
        ]);
    }
}
