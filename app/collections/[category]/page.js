import CategoryProduct from '@/components/Home/CategoryProduct';

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
	console.log(data);

	return (
		<div>
			<h1>category wise product luxury punjabi</h1>
		</div>
	);
}
