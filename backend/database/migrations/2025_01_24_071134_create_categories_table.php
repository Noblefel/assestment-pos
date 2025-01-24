<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('category', function (Blueprint $table) {
            $table->id();
            $table->string('category', 50)->unique();
            // $table->timestamps();
        });

        DB::statement('ALTER TABLE makanan ADD COLUMN category_id BIGINT UNSIGNED;');
        DB::statement('ALTER TABLE makanan  ADD FOREIGN KEY(category_id) REFERENCES category(id);');
    }

    public function down(): void
    {
        Schema::dropIfExists('category');
    }
};
