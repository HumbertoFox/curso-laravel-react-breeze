<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB as FacadesDB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $users = User::whereYear('created_at', now()->year)
            ->groupBy(FacadesDB::raw("MONTH(created_at)"))
            ->selectRaw('count(*) as total, MONTH (created_at) as month')
            ->get();

        $data = [
            'labels' => $users->pluck('month')->toArray(),
            'datasets' => [
                [
                    'data' => $users->pluck('total')->toArray(),
                ],
            ],
        ];

        return Inertia::render('Dashboard/Dashboard', ['data' => $data]);
    }
}