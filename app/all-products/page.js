'use client';
import { useState, useEffect, Suspense } from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import AllProducts from '@/components/AllProducts/AllProducts';

async function getData(page) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_HOST}/api/products?page=${page}`,
		{
			cache: 'no-store',
		}
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const Page = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getData(currentPage);
				setData(result);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [currentPage]);

	// next button
	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};
	// previous button
	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	// page number function
	const paginationButtons = Array.from(
		Array(data?.totalPages || 0).keys()
	).map((index) => (
		<li key={index}>
			<button
				onClick={() => setCurrentPage(index + 1)}
				className={`px-3 py-2 leading-tight   ${
					currentPage === index + 1
						? 'text-blue-500 border-blue-300 bg-blue-50'
						: ''
				}`}
			>
				{index + 1}
			</button>
		</li>
	));

	return (
		<div className='container px-10 mx-auto mt-32'>
			<Suspense fallback={<p>Loading feed...</p>}>
				<div className='grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4'>
					{data?.products.map((product) => (
						<AllProducts key={product._id} product={product} />
					))}
				</div>
			</Suspense>
			{/* pagination start */}
			<nav aria-label='Page navigation example' className='mt-5'>
				<div className='flex justify-center'>
					<ul className='flex flex-wrap items-center -space-x-px'>
						<li>
							<button
								onClick={handlePreviousPage}
								disabled={currentPage === 1}
								className='block px-3 py-2 ml-0 leading-tight'
							>
								<span className='sr-only'>Previous</span>
								<IoMdArrowBack />
							</button>
						</li>
						{paginationButtons}
						<li>
							<button
								onClick={handleNextPage}
								disabled={currentPage === data?.totalPages}
								className='block px-3 py-2 leading-tight '
							>
								<span className='sr-only'>Next</span>
								<IoMdArrowForward />
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Page;
