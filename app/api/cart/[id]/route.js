import { NextResponse } from "next/server";
import connect from "@/middleware/mongoose";
import Cart from "@/models/Cart";
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();
    const cartItem = await Cart.findByIdAndRemove(id);

    if (!cartItem) {
      return new NextResponse("Cart item not found", { status: 404 });
    }

    return new NextResponse({ success: true });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (request, { params }) => {
  const { id } = params;
  /* 	console.log(id); */
  try {
    await connect();
    // Find cart items based on the id parameter
    const cartItems = await Cart.find({ email: id });
    /* 		console.log(cartItems); */
    return NextResponse.json({ cartItems });
  } catch (err) {
    console.error(err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
