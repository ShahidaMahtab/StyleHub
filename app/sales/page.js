'use client';

import { useEffect, useRef, useState } from 'react';

const SalesPage = () => {
	const [timerDays, setTimerDays] = useState('02');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = (countdownDate) => {
		const now = new Date().getTime();
		const distance = countdownDate - now;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (distance < 0) {
			clearInterval(interval.current);
		} else {
			setTimerDays(days);
			setTimerHours(hours);
			setTimerMinutes(minutes);
			setTimerSeconds(seconds);
		}
	};

	function saveInLocalStorage(time) {
		localStorage.setItem('timer', time);
	}

	function getTimeFromLocalStorage() {
		return localStorage.getItem('timer');
	}

	useEffect(() => {
		const localTimer = getTimeFromLocalStorage();

		if (localTimer) {
			interval.current = setInterval(() => {
				startTimer(+localTimer);
			}, 1000);
		} else {
			const countdownDate =
				new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
			saveInLocalStorage(countdownDate);
			interval.current = setInterval(() => {
				startTimer(+countdownDate);
			}, 1000);
		}

		return () => clearInterval(interval.current);
	}, []);

	return (
		<div className=' flex justify-center items-center font-semibold space-x-2  w-screen h-screen text-8xl'>
			<div>
				-{timerDays}
				<sup>D</sup>
			</div>
			<div>
				{timerHours}
				<sup>H</sup>
			</div>
			<div>
				{timerMinutes}
				<sup>M</sup>
			</div>
			<div>
				{timerSeconds}
				<sup>S</sup>
			</div>
		</div>
	);
};

export default SalesPage;
