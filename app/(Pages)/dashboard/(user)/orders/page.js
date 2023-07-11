'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import useCartItems from '@/components/hooks/useCartItems';
const columns = [
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Price',
		key: 'price',
		dataIndex: 'price',
	},
	{
		title: 'quantity',
		key: 'quantity',
		dataIndex: 'quantity',
	},
];
export default function Orders() {
	const { cartItems } = useCartItems();
	/* 	console.log(cartItems); */
	const mappedDataSource = cartItems?.map((data, index) => ({
		...data,
		key: String(index + 1),
	}));
	return (
		<div className='container mx-auto'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-6xl mt-4 font-bold text-black'>Orders</h1>
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
					<Link href='/dashboard/orders'>
						<span>Orders</span>
					</Link>
				</div>
			</div>
			<p className='text-3xl font-semibold'>All Orders</p>
			<Table columns={columns} dataSource={mappedDataSource} />;
		</div>
	);
}
