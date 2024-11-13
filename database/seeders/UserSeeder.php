<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'betofoxnet.info@betofoxnet.com.br'],
            [
                'name' => 'Humberto',
                'email' => 'betofoxnet.info@betofoxnet.com.br',
                'password' => '123456A#',
            ]
        );
    }
}