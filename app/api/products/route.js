import { connectionString } from "@/app/lib/db";
import { Product } from "@/app/lib/models/productModel";
import mongoose from "mongoose";

const { NextResponse } = require("next/server");

export async function GET() {
    try {
        await mongoose.connect(connectionString)
        const data = await Product.find()
        return NextResponse.json({ data })
    } catch (error) {
        return NextResponse.json({ status: false })
    }

}