<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        for ($month = 1; $month <= 12; $month++) {
            User::factory($month)->create([
                'created_at' => Carbon::now()->startOfYear()->addMonths($month - 1)->startOfMonth(),
            ]);
        }

        $this->call([
            UserSeeder::class,
        ]);
    }
}