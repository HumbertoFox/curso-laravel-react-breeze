<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::orderByDesc('id')->paginate(10);

        return Inertia::render('Users/UserIndex', ['users' => $users]);
    }

    public function show(User $user): Response
    {
        return Inertia::render('Users/UserShow', ['user' => $user]);
    }

    public function create(): Response
    {
        return Inertia::render('Users/UserCreate');
    }

    public function store(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return Redirect::route('users.show', ['user' => $user->id])->with('success', 'Usuário Cadastrado com Sucesso!');
    }
}