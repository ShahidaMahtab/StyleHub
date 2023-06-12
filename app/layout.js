import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import { UserProvider } from '@/components/Context/UserContext';
import Footer from '@/components/Footer/Footer';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Fast Sell',
	description: 'Generated by Fast Sell',
};
export default function Layout({ children }) {
	return (
		<html lang='en'>
			<UserProvider>
				<body className={inter.className}>
					<Navbar />
					{children}
					<Footer />
				</body>
			</UserProvider>
		</html>
	);
}
