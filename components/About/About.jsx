'use client';
import Link from 'next/link';
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './About.module.css';
import SwiperNavButtons from './SwiperNavButtons';
import Image from 'next/image';
import { useState } from 'react';

const About = () => {
	const slides = [
		{
			title: 'The Birth of Houston Drip Factory',
			desc: 'We are committed to providing the finest in fashion and footwear and take great pride in our diverse selection and exceptional customer service. Our products are inspired by the nostalgia of the 90s culture, including clothing lines created by musicians, shoes, accessories, concert merchandise from rap and hip-hop concerts, gaming consoles, and accessories, and womens purses and accessories.',
			img2: 'https://source.unsplash.com/4qSb_FWhHKs/600x240',
			img: 'https://source.unsplash.com/4qSb_FWhHKs',
		},
		{
			title: 'A wide range of fashionable Accessories',
			desc: 'We are committed to providing the finest in fashion and footwear and take great pride in our diverse selection and exceptional customer service. Our products are inspired by the nostalgia of the 90s culture, including clothing lines created by musicians, shoes, accessories, concert merchandise from rap and hip-hop concerts, gaming consoles, and accessories, and womens purses and accessories.',
			img: 'https://source.unsplash.com/kJXGTOY1wLQ',
			img2: 'https://source.unsplash.com/kJXGTOY1wLQ/600x240',
		},
		{
			title: 'Building a strong fashionable community',
			desc: 'We are committed to providing the finest in fashion and footwear and take great pride in our diverse selection and exceptional customer service. Our products are inspired by the nostalgia of the 90s culture, including clothing lines created by musicians, shoes, accessories, concert merchandise from rap and hip-hop concerts, gaming consoles, and accessories, and womens purses and accessories.',
			img: 'https://source.unsplash.com/TnNo84AJJ5A',
			img2: 'https://source.unsplash.com/TnNo84AJJ5A/600x240',
		},
		{
			title: 'Dedicated to providing the best Footwear',
			desc: 'We are committed to providing the finest in fashion and footwear and take great pride in our diverse selection and exceptional customer service. Our products are inspired by the nostalgia of the 90s culture, including clothing lines created by musicians, shoes, accessories, concert merchandise from rap and hip-hop concerts, gaming consoles, and accessories, and womens purses and accessories.',
			img: 'https://source.unsplash.com/5BMPrXBFTI8',
			img2: 'https://source.unsplash.com/5BMPrXBFTI8/600x240',
		},
	];
	const [activeSlide, setActiveSlide] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveSlide(swiper.activeIndex);
	};
	const swiper = useSwiper();
	return (
		<section className='min-h-screen '>
			<div className='container mx-auto '>
				{/* title */}
				<div className='pt-20 pb-10 lg:py-20 mt-16'>
					<h2 className='text-3xl lg:text-6xl font-bold text-center text-cyan-950'>
						About Us
					</h2>
					{/* Breadcrumb */}
					<div className='text-sm text-center text-gray-600 pt-4'>
						<Link href='/'>
							<span className=''>Home</span>
						</Link>
						<span className='mx-2 '>{'>>'}</span>
						<Link href='/about-us'>
							<span>About Us</span>
						</Link>
					</div>
				</div>
				{/* content */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-md shadow border-[0.5px]'>
					<div className=''>
						<div className='py-2 lg:py-4 px-8'>
							<h3 className='text-2xl lg:text-4xl font-bold tracking-wider'>
								About Houston <br /> Drip Factory
							</h3>
						</div>
					</div>
					<div className=''>
						<div className='py-4 px-8'>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Officiis pariatur ab dicta
								vitae nihil maiores odio, illum dolore, alias
								ratione sint blanditiis, fugiat provident
								voluptates. Possimus obcaecati tempore odit
								dolores.Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Officiis pariatur ab dicta
								vitae nihil maiores odio, illum dolore, alias
								ratione sint blanditiis, fugiat provident
								voluptates. Possimus obcaecati tempore odit
								dolores.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Officiis pariatur ab dicta
								vitae nihil maiores odio, illum dolore, alias
								ratione sint blanditiis, fugiat provident
								voluptates. Possimus obcaecati tempore odit
								dolores.Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Officiis pariatur ab dicta
								vitae nihil maiores odio, illum dolore, alias
								ratione sint blanditiis, fugiat provident
								voluptates. Possimus obcaecati tempore odit
								dolores.
							</p>
						</div>
					</div>
				</div>

				{/* Our history */}
				<div className='pt-5 lg:pt-20'>
					<div className='flex items-center justify-between'>
						<div>
							<h2 className='text-xl lg:text-4xl font-bold py-10'>
								Our History
							</h2>
						</div>
						<div>
							<h2 className='text-lg lg:text-3xl font-semibold'>
								2017---2018
							</h2>
						</div>
					</div>
					<div className='hidden lg:block lg:pb-20 lg:relative'>
						{/* swiper */}
						<Swiper
							slidesPerView={1.5}
							spaceBetween={180}
							modules={[Navigation, Pagination, A11y]}
							onSlideChange={handleSlideChange}
							/* onSwiper={swiper.set} */
							className='mySwiper '
						>
							{slides.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className='relative h-[500px]'>
										<div className='w-[1000px]  bg-gray-500 rounded-xl'>
											<Image
												src={slide.img}
												width={1000}
												height={440}
												className='rounded-xl contrast-75 w-[1000px] h-[440px]'
											/>
										</div>
									</div>
									{activeSlide === index ? (
										<div className=' bg-slate-200 rounded-xl absolute right-20 left-20 bottom-0 p-6 border border-blue-400'>
											<h2 className='text-xl font-semibold pb-2'>
												{slide.title}
											</h2>
											<div>{slide.desc}</div>
										</div>
									) : (
										<div className='bg-transparent bg-gradient-to-r from-cyan-500/30 to-blue-500/30 p-4 border text-2xl font-semibold text-white absolute left-10 bottom-20 rounded-md z-10'>
											<h2>{slide.title}</h2>
										</div>
									)}
								</SwiperSlide>
							))}
							<SwiperNavButtons />
						</Swiper>
					</div>
					<div className='lg:hidden relative'>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							modules={[Navigation, Pagination, A11y]}
							onSlideChange={handleSlideChange}
							className='mySwiper relative'
						>
							{slides.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className=''>
										<Image
											src={slide.img2}
											width={600}
											height={240}
										/>
									</div>
									{activeSlide === index && (
										<div className=' bg-slate-200 rounded-xl  p-6 mt-4 border border-blue-400'>
											<h2 className='text-xl font-semibold pb-2'>
												{slide.title}
											</h2>
											<div>{slide.desc}</div>
										</div>
									)}
								</SwiperSlide>
							))}
							<SwiperNavButtons />
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
