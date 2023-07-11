'use client';
import { LoadingProvider } from '@/components/Context/LoadingContext';
import Providers from '@/components/Providers';

export default function Layout({ children }) {
	return (
		<>
			<LoadingProvider>
				<Providers>{children}</Providers>
			</LoadingProvider>
		</>
	);
}
