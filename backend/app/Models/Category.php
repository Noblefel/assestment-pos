<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public $table  = "category";

    public $timestamps = false;

    protected $fillable = ['category'];

    public function makanan()
    {
        return $this->hasMany(Makanan::class);
    }
}
