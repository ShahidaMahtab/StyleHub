'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import {
	MdOutlineAccountCircle,
	MdOutlineListAlt,
	MdOutlineLockPerson,
} from 'react-icons/md';

export default function Dashboard() {
	const { data: session } = useSession();
	const name = session?.user?.name;
	return (
		<div className='container mx-auto '>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-6xl mt-4 font-bold text-black'>
					Dashboard
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
				</div>
			</div>
			<p className='text-3xl font-semibold'>
				Welcome back, {name ? name : ''}
			</p>

			<div className='grid grid-cols-2 items-center justify-center  mt-4 text-2xl capitalize w-2/3 gap-4'>
				<div className='border font-semibold  flex flex-col items-center justify-center  p-8 rounded-xl shadow'>
					<MdOutlineListAlt size={55} />
					<h4 className=''>Orders</h4>
				</div>

				<div className='border font-semibold  flex flex-col items-center justify-center  p-8 rounded-xl shadow'>
					<AiOutlineHeart size={55} />
					<h4 className=''>Whishlist</h4>
				</div>

				<div className='border font-semibold  flex flex-col items-center justify-center  p-8 rounded-xl shadow'>
					<MdOutlineAccountCircle size={55} />
					<h4 className=''>Account Info</h4>
				</div>
				<div className='border font-semibold  flex flex-col items-center justify-center  p-8 rounded-xl shadow'>
					<MdOutlineLockPerson size={55} />
					<h4 className=''>Change Password</h4>
				</div>
			</div>
		</div>
	);
}
