import connect from "@/middleware/mongoose";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connect();
    const products = await Products.find({});
    return NextResponse.json({ products });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: "Database Error" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    await connect();
    const body = await request.json();
    let product = await Products.create(body);
    console.log(product);
    // await products.save();
    return NextResponse.json({ product });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}
