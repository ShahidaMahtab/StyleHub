'use client';
import React, { useState, useEffect } from 'react';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { SlUser } from 'react-icons/sl';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useUser } from '../Context/UserContext';
import NavigationContent from './NavigationContent';
import { BiLogOut } from 'react-icons/bi';
import { MdOutlineAccountCircle } from 'react-icons/md';
const Navbar = () => {
	const { user, logout } = useUser();
	const [cartItems, setCartItems] = useState([]);
	const [open, setOpen] = useState(false);

	const [cartOpen, setCartOpen] = useState(false);
	const [activeOption, setActiveOption] = useState(null);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const email = user?.email;
	useEffect(() => {
		const handleResize = () => {
			setOpen(false);
			setCartOpen(false);
			setDropdownOpen(false);
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
	const handleCartClose = () => {
		setCartOpen(false);
	};

	const renderNavigationContent = () => {
		if (open) {
			return (
				<div className='fixed z-50 w-full h-[80vh] bg-white'>
					<div className='container pt-4 mx-auto lg:flex lg:space-x-4'>
						<div>
							<NavigationContent toggleDrawer={toggleDrawer} />
						</div>
						<div className='flex flex-col pt-2 pl-2 space-y-2 lg:pl-0'>
							<Link href='/about-us'>
								<h1 className='text-xl font-medium hover:underline'>
									About Us
								</h1>
							</Link>
							<Link href='/all-products'>
								<h1 className='text-xl font-medium no-underline hover:underline'>
									All Products
								</h1>
							</Link>
							<div className='lg:hidden'>
								{!user?.value ? (
									<Link
										href='/signup'
										className='flex items-center space-x-2 text-xl font-medium capitalize'
									>
										<MdOutlineAccountCircle size={30} />
										<button onClick={handleLinkClick}>
											Account Info
										</button>
									</Link>
								) : (
									<Link
										href='/'
										onClick={logout}
										className='flex items-center space-x-2 text-xl font-medium capitalize '
									>
										<BiLogOut />
										<button onClick={handleLinkClick}>
											logout
										</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			);
		}

		return null;
	};

	const renderCartDrawer = () => {
		useEffect(() => {
			fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cart/${email}`)
				.then((res) => res.json())
				.then((data) => {
					setCartItems(data.cartItems);
				});
		}, [cartItems, email]);
		if (cartOpen) {
			return (
				<div className='fixed inset-0 z-50 flex justify-end bg-black bg-opacity-25'>
					<div className='w-full lg:w-1/3 h-screen bg-white'>
						<div className='flex justify-end p-2'>
							<button onClick={toggleCartDrawer}>
								<AiOutlineClose size={30} />
							</button>
						</div>
						<div className='container px-8 mx-auto'>
							<h2
								className='text-lg font-medium text-gray-900'
								id='slide-over-title'
							>
								Shopping Cart
							</h2>
							{cartItems?.map((item) => {
								return (
									<div className='' key={item._id}>
										<div className='mt-8'>
											<div className='flow-root'>
												<ul
													role='list'
													className='-my-6 divide-y divide-gray-200'
												>
													<li className='flex py-6'>
														<div className='flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md'>
															<img
																src={item.image}
																alt={item.title}
																className='object-cover object-center w-full h-full'
															/>
														</div>

														<div className='flex flex-col flex-1 ml-4'>
															<div>
																<div className='flex justify-between text-base font-medium text-gray-900'>
																	<h3>
																		<a href='#'>
																			{
																				item.title
																			}
																		</a>
																	</h3>
																	<p className='ml-4'>
																		$
																		{
																			item.price
																		}
																	</p>
																</div>
																<p className='mt-1 text-sm text-gray-500'>
																	{
																		item.category
																	}
																</p>
															</div>
															<div className='flex items-end justify-between flex-1 text-sm'>
																<p className='text-gray-500'>
																	{item.price}
																</p>

																<div className='flex'>
																	<button
																		type='button'
																		className='font-medium text-indigo-600 hover:text-indigo-500'
																	>
																		{
																			item.quantity
																		}
																	</button>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								);
							})}
							{cartItems.length > 0 ? (
								<div className='mt-6'>
									<Link
										onClick={handleCartClose}
										href='/checkout'
										className='flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'
									>
										Checkout
									</Link>
								</div>
							) : (
								<div className='mt-6'>
									<Link
										href='/checkout'
										className='flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'
									>
										No Items available in the Cart
									</Link>
								</div>
							)}
						</div>
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
					<div className='content h-[70vh]  pt-4 bg-white text-black'>
						Content list for Women
					</div>
				);
			case 'man':
				return (
					<div className='content h-[70vh]  pt-4 bg-white text-black '>
						Content list for Men
					</div>
				);
			case 'babies':
				return (
					<div className='content h-[70vh]  pt-4 bg-white text-black'>
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
				<div className='absolute mt-2 bg-white border border-gray-200 rounded shadow-md right-12 w-36'>
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
		<section className='fixed top-0 left-0 right-0 z-50 bg-white '>
			<Link href='/sales'>
				{' '}
				<div className='text-center text-white bg-black'>
					<marquee>Free shipping & returns for Canada & USA.</marquee>
				</div>
			</Link>
			<div
				className={`flex lg:grid lg:grid-cols-12 border-b-4 border-black h-[10vh] ${
					activeOption || open ? 'bg-white' : ''
				} `}
			>
				<div className='border-r-4 lg:flex lg:justify-center border-black lg:col-span-1'>
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
				<div className='hidden md:flex lg:items-center p-4 space-x-2 font-semibold lg:col-span-4'>
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
				<div className='flex items-center justify-center mx-auto text-lg font-bold tracking-widest lg:col-span-3'>
					KWS
				</div>
				<div className='hidden lg:flex lg:items-center lg:justify-end pr-4 space-x-4 lg:col-span-3'>
					<div>English</div>
					<div className='z-10'>
						<button onClick={toggleDropdown}>
							<SlUser />
						</button>

						{renderDropdownContent()}
					</div>
				</div>
				<div className='border-l-4 border-black lg:flex lg:justify-center lg:col-span-1'>
					<div className='p-4'>
						<button onClick={toggleCartDrawer}>
							<FiShoppingCart size={30} />
						</button>
					</div>
				</div>
			</div>
			{renderNavigationContent()}
			{renderOptionContent()}
			{renderCartDrawer()}
		</section>
	);
};

export default Navbar;
