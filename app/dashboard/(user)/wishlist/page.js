'use client';
import { useUser } from '@/components/Context/UserContext';
import React, { useEffect, useState } from 'react';

export default function page() {
	const { user, logout } = useUser();
	const email = user.email;
	console.log(email);
	/* 	const [userRole, setUserRole] = useState({});

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_HOST}/api/wishlist/${email}`)
			.then((res) => res.json())
			.then((data) => {
				setUserRole(data.role);
			});
	}, [email]);

	console.log(userRole); */
	return (
		<div>
			<h1>wishlist</h1>
		</div>
	);
}
