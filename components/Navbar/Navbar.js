'use client';
import React, { useState, useEffect } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { SlUser } from 'react-icons/sl';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useUser } from '../Context/UserContext';

const Navbar = () => {
	const { user, logout } = useUser();
	const [open, setOpen] = useState(false);

	const [cartOpen, setCartOpen] = useState(false);
	const [activeOption, setActiveOption] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setOpen(false);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleDrawer = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const toggleCartDrawer = () => {
		setCartOpen((prevCartOpen) => !prevCartOpen);
	};

	const toggleDropdown = () => {
		setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
	};
	const handleOptionHover = (option) => {
		setActiveOption(option);
	};
	const handleLinkClick = () => {
		setDropdownOpen(false);
	};
	const renderNavigationContent = () => {
		if (open) {
			return (
				<div className='h-[90vh] min-h-full pt-4 bg-cyan-500 text-white'>
					<div className='container mx-auto grid grid-cols-2 gap-4'>
						<div className='text-4xl'>
							<ul className='space-y-4 font-semibold'>
								<li>Sustainability</li>
								<li>About Us</li>
								<li>Contact</li>
							</ul>
						</div>
						<div></div>
					</div>
				</div>
			);
		}

		return null;
	};

	const renderCartDrawer = () => {
		if (cartOpen) {
			return (
				<div className='fixed inset-0 flex justify-end bg-black bg-opacity-25 z-50'>
					<div className='w-1/3 bg-white h-screen'>
						<div className='flex justify-end p-2'>
							<button onClick={toggleCartDrawer}>
								<AiOutlineClose size={30} />
							</button>
						</div>
						Cart Drawer Content
					</div>
				</div>
			);
		}

		return null;
	};

	const renderOptionContent = () => {
		switch (activeOption) {
			case 'women':
				return (
					<div className='content h-[70vh]  pt-4 bg-cyan-500 text-white'>
						Content list for Women
					</div>
				);
			case 'man':
				return (
					<div className='content h-[70vh]  pt-4 bg-cyan-500 text-white'>
						Content list for Men
					</div>
				);
			case 'babies':
				return (
					<div className='content h-[70vh]  pt-4 bg-cyan-500 text-white'>
						Content list for Babies
					</div>
				);
			default:
				return null;
		}
	};
	const renderDropdownContent = () => {
		if (dropdownOpen) {
			return (
				<div className='absolute right-12 mt-2 w-36 bg-white border border-gray-200 rounded shadow-md'>
					{!user?.value && (
						<Link
							href='/signup'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
						>
							<button onClick={handleLinkClick}>SignUp</button>
						</Link>
					)}
					{user?.value && (
						<>
							<Link
								href='/'
								onClick={logout}
								className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
							>
								<button onClick={handleLinkClick}>
									logout
								</button>
							</Link>
							<Link
								href='/dashboard'
								className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
							>
								<button onClick={handleLinkClick}>
									Dashboard
								</button>
							</Link>
						</>
					)}
				</div>
			);
		}

		return null;
	};
	return (
		<>
			<div className='bg-black text-white text-center'>
				<marquee>Free shipping & returns for Canada & USA.</marquee>
			</div>
			<section
				className={`flex border-b-4 border-black h-[10vh] ${
					activeOption || open ? 'hover:bg-cyan-400' : ''
				} `}
			>
				<div className='border-r-4 border-black'>
					<div className='p-4'>
						<button onClick={toggleDrawer}>
							{open ? (
								<AiOutlineClose size={30} />
							) : (
								<HiOutlineBars3CenterLeft size={30} />
							)}
						</button>
					</div>
				</div>
				<div className='flex items-center p-4 space-x-2 font-semibold'>
					<div
						className={`option ${
							activeOption === 'women' ? 'active underline' : ''
						}`}
						onMouseEnter={() => handleOptionHover('women')}
						onMouseLeave={() => handleOptionHover(null)}
					>
						Women
					</div>
					<div
						className={`option ${
							activeOption === 'man' ? 'active underline' : ''
						}`}
						onMouseEnter={() => handleOptionHover('man')}
						onMouseLeave={() => handleOptionHover(null)}
					>
						Man
					</div>
					<div
						className={`option  ${
							activeOption === 'babies' ? 'active underline' : ''
						}`}
						onMouseEnter={() => handleOptionHover('babies')}
						onMouseLeave={() => handleOptionHover(null)}
					>
						Babies
					</div>
				</div>
				<div className='flex justify-center items-center mx-auto text-lg font-bold tracking-widest'>
					KWS
				</div>
				<div className='flex items-center space-x-4 pr-4'>
					<div>English</div>
					<div className='z-10'>
						{!cartOpen && (
							<button onClick={toggleDropdown}>
								<SlUser />
							</button>
						)}
						{renderDropdownContent()}
					</div>
				</div>
				<div className='border-l-4 border-black'>
					<div className='p-4'>
						<button onClick={toggleCartDrawer}>
							<FiShoppingCart size={30} />
						</button>
					</div>
				</div>
			</section>
			{renderNavigationContent()}
			{renderOptionContent()}
			{renderCartDrawer()}
		</>
	);
};

export default Navbar;
