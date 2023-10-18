<?php

namespace App\Http\Controllers;

use App\Models\Process;
use Illuminate\Http\Request;

class ProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $processes = Process::all();
        return response()->json(
            $processes, 200
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $process = new Process();
        $process->name = $request->input('name');
        $process->save();

        return response()->json(
            $process, 201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Process $process)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Process $process)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Process $process)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $processes = Process::find($id);
        $processes->delete();
        if($processes) {
            return response()->json([
                'message' => 'Process deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Process not found',
            ], 404);
        }
    }
}
