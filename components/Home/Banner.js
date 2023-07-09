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
			<video ref={videoRef} autoPlay loop muted>
				<source src='/videos/banner.mp4' type='video/mp4' />
				{/* Your browser does not support the video tag. */}
			</video>
			<div className='absolute bottom-4 right-4'>
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
