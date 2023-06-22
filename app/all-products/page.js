import AllProducts from '@/components/AllProducts/AllProducts';
async function getData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/products`, {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}
const page = async () => {
	const data = await getData();
	/* console.log(data.products); */
	return (
		<div className='container px-10 mx-auto mt-32'>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4'>
				{data?.products.map((product) => (
					<AllProducts key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};
export default page;
