'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronsRight } from 'react-icons/fi';

import './CategoryProduct.css';
async function getData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/products`, {
		cache: 'no-store',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const CategoryProduct = async () => {
	const data = await getData();
	const products = data.products;
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
	};
	return (
		<section className=''>
			<div className=' '>
				<Slider {...settings}>
					{products.map((product) => (
						<Link
							href={`/collections/${product.category}`}
							key={product._id}
						>
							<div className='space-y-4 pr-[1.5px]'>
								<div className=''>
									<Image
										src={product.image}
										alt='product-image'
										className=' w-full'
										width={240}
										height={327}
									/>
								</div>
								<div className='mx-auto w-2/3  text-center flex items-center justify-center space-x-4 py-2 shadow-md rounded-xl capitalize border border-slate-300 '>
									<button className='capitalize text-lg '>
										{product.category}
									</button>
									<FiChevronsRight size={26} />
								</div>
							</div>
						</Link>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default CategoryProduct;
