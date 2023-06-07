import connect from '@/middleware/mongoose';
import Products from '@/models/Products';
import { NextResponse } from 'next/server';

export async function GET(request) {
	try {
		await connect();
		const products = await Products.find({});
		return NextResponse.json({ products });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
}
