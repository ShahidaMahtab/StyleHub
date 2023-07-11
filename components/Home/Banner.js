'use client';
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Banner = () => {
	const [isPlaying, setIsPlaying] = useState(true);
	const [isMuted, setIsMuted] = useState(false);
	const videoRef = useRef(null);

	// video play function
	const handleTogglePlay = () => {
		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	// sound play function
	const handleToggleSound = () => {
		if (isMuted) {
			videoRef.current.muted = false;
		} else {
			videoRef.current.muted = true;
		}
		setIsMuted(!isMuted);
	};

	return (
		<div className='relative'>
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				className='w-full object-cover h-[100vh]'
			>
				<source src='/videos/banner.mp4' type='video/mp4' />
				{/* Your browser does not support the video tag. */}
			</video>
			<div className='absolute left-14 right-14 bottom-28 space-y-6 mx-auto flex flex-col justify-center items-center'>
				<h2 className='lg:text-4xl text-white text-center flex justify-center mx-auto'>
					MONOGRAM MACASSAR
				</h2>
				<div className='flex justify-center items-center space-x-4'>
					<button className='text-white border-2 border-white px-6 rounded-lg py-2 font-semibold'>
						Discover the New Shape
					</button>
					<button className='text-white border-2 border-white px-6 rounded-lg py-2 font-semibold'>
						Explore Leather Goods
					</button>
				</div>
			</div>
			<div className='absolute bottom-8 right-4'>
				<button
					className='text-white bg-transparent focus:outline-none'
					onClick={handleTogglePlay}
				>
					{isPlaying ? (
						<FaPause className='w-6 h-6' />
					) : (
						<FaPlay className='w-6 h-6' />
					)}
				</button>
				<button
					className='ml-4 text-white bg-transparent focus:outline-none'
					onClick={handleToggleSound}
				>
					{isMuted ? (
						<FaVolumeUp className='w-6 h-6' />
					) : (
						<FaVolumeMute className='w-6 h-6' />
					)}
				</button>
			</div>
		</div>
	);
};

export default Banner;
