'use client';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { UserProvider } from '@/components/Context/UserContext';
import Footer from '@/components/Footer/Footer';
import Loading from './loading';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Fast Sell',
	description: 'Generated by Fast Sell',
};
export default function Layout({ children }) {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		// Simulate an asynchronous operation
		setTimeout(() => {
			setLoading(false); // Set loading status to false after the content is loaded
		}, 1000); // Replace with your actual content loading code
	}, []);
	const pathname = usePathname();
	const name = [
		'/dashboard',
		'/dashboard/orders',
		'/dashboard/account-info',
		'/dashboard/change-password',
		'/dashboard/wishlist',
		'/sales',
	];

	return (
		<html lang='en'>
			{loading ? (
				<Loading />
			) : (
				<UserProvider>
					<body className={inter.className}>
						{!name.includes(pathname) && <Navbar />}
						{children}
						{!name.includes(pathname) && <Footer />}
					</body>
				</UserProvider>
			)}
		</html>
	);
}
