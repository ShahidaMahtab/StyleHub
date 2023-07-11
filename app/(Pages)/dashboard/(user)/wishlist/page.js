'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
export default function page() {
	const { data: session } = useSession();
	const email = session?.user?.tokenUser;
	/* 	console.log(email); */
	const [wishlist, setWishlist] = useState([]);

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_HOST}/api/wishlist/${email}`)
			.then((res) => res.json())
			.then((data) => {
				setWishlist(data.wishlistItem);
			});
	}, [email, wishlist]);

	/* 	console.log(wishlist); */
	return (
		<div className='container px-10 mx-auto '>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-6xl mt-4 font-bold text-black'>
					Whishlist
				</h1>
				{/* Breadcrumb */}
				<div className='text-md text text-slate-600 py-4'>
					<Link href='/'>
						<span className=''>Home</span>
					</Link>
					<span className='mx-2 '>{'>>'}</span>
					<Link href='/dashboard'>
						<span>My Account</span>
					</Link>
					<span className='mx-2 '>{'>>'}</span>
					<Link href='/dashboard/wishlist'>
						<span>Whishlist</span>
					</Link>
				</div>
			</div>
			<p className='text-3xl font-semibold'>All Wishlist Products</p>
			{wishlist?.length === 0 ? (
				<div>Not Found</div>
			) : (
				<div className='grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4'>
					{wishlist?.map((item) => (
						<div className='mt-4 border' key={item.id}>
							<div className=''>
								<Image
									src={item.image}
									width={500}
									height={500}
									alt={item.title}
								/>
							</div>
							<small className='text-gray-700 text-bold pl-2'>
								{item.title}
							</small>
							<br />
							<small className='font-bold pl-2'>
								${item.price}
							</small>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
