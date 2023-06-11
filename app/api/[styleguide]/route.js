import connect from '@/middleware/mongoose';
import Styleguide from '@/models/Styleguide';

import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const { styleguide } = params;
	console.log(params);
	console.log(styleguide);
	try {
		await connect();
		const styleCategory = await Styleguide.find({ type: styleguide });
		return NextResponse.json({
			product: styleCategory,
			count: styleCategory.length,
		});
	} catch (err) {
		return new NextResponse(`No product with category : ${styleguide}`);
	}
}
