<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::all();
        return response()->json(
            $suppliers, 200
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
        $supplier = new Supplier();
        $supplier->name = $request->input('name');
        $supplier->save();

        return response()->json(
            $supplier, 201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Supplier $supplier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $suppliers = Supplier::find($id);
        $suppliers->delete();
        if($suppliers) {
            return response()->json([
                'message' => 'Supplier deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Supplier not found',
            ], 404);
        }
    }
}
