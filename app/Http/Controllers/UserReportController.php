<?php

namespace App\Http\Controllers;

use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class UserReportController extends Controller
{
    public function generatePdf(Request $request)
    {
        $users = User::when($request->has('name') && $request->name !== 'null', function ($whenQuery) use ($request) {
            $whenQuery->where('name', 'like', '%' . $request->name . '%');
        })
            ->when($request->has('email') && $request->email !== 'null', function ($whenQuery) use ($request) {
                $whenQuery->where('email', 'like', '%' . $request->email . '%');
            })
            ->when(!empty($request->filled('date_start')) && $request->date_start !== 'null', function ($whenQuery) use ($request) {
                $whenQuery->where('created_at', '>=', \Carbon\Carbon::parse($request->date_start)->format('Y-m-d H:i:s'));
            })
            ->when(!empty($request->filled('date_end')) && $request->date_end !== 'null', function ($whenQuery) use ($request) {
                $whenQuery->where('created_at', '<=', \Carbon\Carbon::parse($request->date_end)->format('Y-m-d H:i:s'));
            })
            ->orderByDesc('id')->get();

        $pdf = Pdf::loadView('users.generatePdf', ['users' => $users])->setPaper('a4', 'portrait');

        return $pdf->download('list_users.pdf');
    }
}