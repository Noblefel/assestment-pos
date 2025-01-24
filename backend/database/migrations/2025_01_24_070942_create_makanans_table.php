<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('makanan', function (Blueprint $table) {
            $table->id();
            $table->string("nama", 80)->unique();
            $table->integer("harga");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('makanan');
    }
};
