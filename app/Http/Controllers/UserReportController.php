<?php

namespace App\Http\Controllers;

use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class UserReportController extends Controller
{
    public function generatePdf()
    {
        $users = User::orderByDesc('id')->get();

        $pdf = Pdf::loadView('users.generatePdf', ['users' => $users])->setPaper('a4', 'portrait');

        return $pdf->download('list_users.pdf');
    }
}