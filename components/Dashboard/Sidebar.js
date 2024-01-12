'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import { useSession, signOut } from 'next-auth/react';
import Logo from '@/public/logo/logo-light.png';
import Image from 'next/image';
import {
	MdLogout,
	MdOutlineAccountCircle,
	MdOutlineDashboard,
	MdOutlineListAlt,
	MdOutlineLockPerson,
	MdOutlineOtherHouses,
} from 'react-icons/md';
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';

const Sidebar = () => {
	const { data: session } = useSession();
	const role = session?.user?.role;

	const users = [
		{
			name: 'Orders',
			pathname: '/dashboard/orders',
			icon: <MdOutlineListAlt size={25} />,
		},
		{
			name: 'Wishlist',
			pathname: '/dashboard/wishlist',
			icon: <AiOutlineHeart size={25} />,
		},
		{
			name: 'Account info',
			pathname: '/dashboard/account-info',
			icon: <MdOutlineAccountCircle size={25} />,
		},
		{
			name: ' Change Password',
			pathname: '/dashboard/change-password',
			icon: <MdOutlineLockPerson size={25} />,
		},
		{
			name: 'Home',
			pathname: '/',
			icon: <MdOutlineOtherHouses size={25} />,
		},
		// {
		//   name: "Logout",
		//   pathname: "/",
		//   icon: <BiChevronsRight size={25} />,
		// },
	];
	return (
		<div className=''>
			<div className='sidebar  w-full overflow-hidden border-r  bg-[#112D4E] hover:shadow-lg '>
				<div className='flex flex-col justify-between h-screen pt-2 pb-6'>
					<div>
						<div className='w-max mx-auto pt-6'>
							{/* <img src={Logo} alt="" /> */}
							<Image
								src={Logo}
								width={60}
								height={60}
								alt='side-bar-logo'
							/>
						</div>
						<ul className='mt-10 space-y-3 tracking-wide'>
							<li className='min-w-max'>
								<Link
									prefetch
									href='/dashboard'
									aria-label='dashboard'
									className='relative flex items-center px-4 py-3 space-x-4 text-white  '
								>
									<MdOutlineDashboard size={25} />
									<span className='-mr-1 font-medium'>
										Dashboard
									</span>
								</Link>
							</li>
							{role === 'admin' ? (
								<>
									<li className='min-w-max'>
										<Link
											prefetch
											href='/dashboard/uploadproducts'
											aria-label='dashboard'
											className='relative flex items-center px-4 py-3 space-x-4 text-white  '
										>
											<AiOutlineUpload size={25} />
											<span className='-mr-1 font-medium'>
												Upload Products
											</span>
										</Link>
									</li>
									<li className='min-w-max'>
										<Link
											prefetch
											href='/dashboard/uploadproducts'
											aria-label='dashboard'
											className='relative flex items-center px-4 py-3 space-x-4 text-white '
										>
											<MdLogout size={25} />
											<Link
												href='/'
												onClick={() => signOut()}
											>
												<span className='-mr-1 font-medium'>
													Logout
												</span>
											</Link>
										</Link>
									</li>
								</>
							) : (
								<>
									{users?.map((u) => (
										<li key={u.name} className='min-w-max'>
											<Link
												prefetch
												href={u?.pathname}
												aria-label='dashboard'
												className='relative flex items-center px-4 py-3 space-x-4 text-white '
											>
												{u.icon}

												<span className='-mr-1 font-medium'>
													{u.name}
												</span>
											</Link>
										</li>
									))}
									<li className='min-w-max'>
										<Link
											prefetch
											href='/'
											onClick={() => signOut()}
											aria-label='dashboard'
											className='relative flex items-center px-4 py-3 space-x-4 text-white'
										>
											<MdLogout size={25} />

											<span className='-mr-1 font-medium'>
												Logout
											</span>
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
