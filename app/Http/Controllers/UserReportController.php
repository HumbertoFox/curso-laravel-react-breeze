<?php

namespace App\Http\Controllers;

use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

        $totalRecords = $users->count('id');
        $numberRecordsAllowed = 100;
        if ($totalRecords > $numberRecordsAllowed) {
            return back()->with('error', "Limite de registros ultrapassado para gerar PDF. O limite é de $numberRecordsAllowed registros!");
        }

        $pdf = Pdf::loadView('users.generatePdf', ['users' => $users])->setPaper('a4', 'portrait');

        return $pdf->download('list_users.pdf');
    }

    public function generateCsv(Request $request)
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

        $totalRecords = $users->count('id');
        $numberRecordsAllowed = 100;
        if ($totalRecords > $numberRecordsAllowed) {
            return back()->with('error', "Limite de registros ultrapassado para gerar CSV. O limite é de $numberRecordsAllowed registros!");
        }

        $csvFileName = tempnam(sys_get_temp_dir(), 'csv_' . Str::ulid());
        $openFile = fopen($csvFileName, 'w');
        $header = ['id', 'Nome', 'E-mail', 'Data de Cadastro'];
        fputcsv($openFile, $header, ';');

        foreach ($users as $user) {
            $userArray = [
                'id' => $user->id,
                'name' => mb_convert_encoding($user->name, 'ISO-8859-1', 'UTF-8'),
                'email' => $user->email,
                'created_at' => \Carbon\Carbon::parse($user->created_at)->format('d/m/Y H:i:s'),
            ];
            fputcsv($openFile, $userArray, ';');
        }
        fclose($openFile);

        return response()->download($csvFileName, 'list_users' . Str::ulid() . '.csv');
    }
}