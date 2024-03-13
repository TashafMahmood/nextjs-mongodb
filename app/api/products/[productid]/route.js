import { connectionString } from "@/app/lib/db";
import { Product } from "@/app/lib/models/productModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
    const payload = await request.json()
    const filter = { _id: content.params.productid }

    await mongoose.connect(connectionString)
    const data = await Product.findOneAndUpdate(filter, payload)

    return NextResponse.json({ result: data })
}

export async function GET(request, content) {
    const id = content.params.productid;
    const record = { _id: id }
    await mongoose.connect(connectionString)
    const result = await Product.findById(record)
    return NextResponse.json({ result, success: true })
}

export async function DELETE(request, content) {
    const id = content.params.productid;
    const record = { _id: id }
    await mongoose.connect(connectionString)
    const result = await Product.deleteOne(record)
    return NextResponse.json({ result, success: true })
}
