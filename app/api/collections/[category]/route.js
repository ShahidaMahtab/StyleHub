import connect from '@/middleware/mongoose';
import Products from '@/models/Products';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const { category } = params;
	console.log(params);
	console.log(category);
	try {
		await connect();
		const productCategory = await Products.find({ category: category });
		return NextResponse.json({
			product: productCategory,
			count: productCategory.length,
		});
	} catch (err) {
		return new NextResponse(`No product with category : ${category}`);
	}
}
