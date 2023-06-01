import React from 'react';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const SwiperNavButtons = () => {
	const swiper = useSwiper();

	return (
		<div className='flex space-x-4 absolute right-40 top-40  z-10  '>
			<button
				className='rounded-full bg-white p-2'
				onClick={() => swiper.slidePrev()}
			>
				<AiOutlineArrowLeft size={30} className='text-black' />
			</button>
			<button
				className='rounded-full bg-white p-2'
				onClick={() => swiper.slideNext()}
			>
				<AiOutlineArrowRight size={30} className='text-black' />
			</button>
		</div>
	);
};

export default SwiperNavButtons;
