<?php

namespace App\Http\Controllers;

use App\Models\Worker;
use Illuminate\Http\Request;

class WorkerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $workers = Worker::all();
        return response()->json(
            $workers, 200
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
        $worker = new Worker();
        $worker->name = $request->input('name');
        $worker->save();

        return response()->json(
            $worker, 201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Worker $worker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Worker $worker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Worker $worker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $workers = Worker::find($id);
        $workers->delete();
        if($workers) {
            return response()->json([
                'message' => 'Worker deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Worker not found',
            ], 404);
        }
    }
}
