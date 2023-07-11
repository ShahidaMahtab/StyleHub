'use client';

import Providers from '@/components/Providers';

export default function Layout({ children }) {
	return (
		<>
			<Providers>{children}</Providers>
		</>
	);
}
