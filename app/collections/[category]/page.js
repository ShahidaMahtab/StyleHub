import CategoryCollection from '@/components/CategoryCollection/CategoryCollection';

async function getData(category) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_HOST}/api/collections/${category}`,
		{
			cache: 'no-store',
		}
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Category({ params }) {
	const data = await getData(params.category);

	return (
		<div className='container px-10 mx-auto mt-8'>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4'>
				{data?.product.map((product) => (
					<CategoryCollection key={product._id} product={product} />
				))}
			</div>
		</div>
	);
}
