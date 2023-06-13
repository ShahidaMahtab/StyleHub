import Cart from '@/models/Cart';
import { NextResponse } from 'next/server';
import connect from '@/middleware/mongoose';

export async function POST(request) {
	try {
		await connect();
		const body = await request.json();
		const { _id } = body;

		// Check if the product already exists in the cart collection
		const existingCart = await Cart.findOne({ _id });

		if (existingCart) {
			return NextResponse.json({ isInCart: true });
		} else {
			// Product not in the cart, add it to the collection
			const cart = new Cart(body);
			await cart.save();
			console.log(cart);
			return NextResponse.json({ isInCart: false, cart });
		}
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
}
