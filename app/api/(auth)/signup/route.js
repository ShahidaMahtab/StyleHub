import connect from '@/middleware/mongoose';
import User from '@/models/User';
import { NextResponse } from 'next/server';
var CryptoJS = require('crypto-js');

export async function POST(request) {
	try {
		await connect();
		const body = await request.json();
		/* 	console.log(body); */
		const { firstName, lastName, email, phone } = body;
		// first registered user is an admin
		const isFirstAccount = (await User.countDocuments({})) === 0;
		const role = isFirstAccount ? 'admin' : 'user';
		let user = new User({
			firstName,
			lastName,
			phone,
			email,
			role,
			password: CryptoJS.AES.encrypt(
				body.password,
				'secret123'
			).toString(),
		});
		await user.save();
		return NextResponse.json({ success: true });
	} catch (err) {
		console.log(err);
		return new NextResponse('Database Error', { status: 500 });
	}
}
