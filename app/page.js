import Image from 'next/image';

export default function Home() {
	return (
		<section className=''>
			<div className='relative'>
				<Image
					src='https://source.unsplash.com/7cERndkOyDw'
					alt='Banner Image'
					width={1690}
					height={400}
					className='center bg-no-repeat brightness-[40%] cover '
				/>
				<div className='absolute inset-0 flex top-28 justify-start container mx-auto'>
					<div className='space-y-4'>
						<div className='font-semibold text-4xl text-white uppercase'>
							Fosfo puffer
						</div>
						<br />
						<div className='text-8xl text-white font-bold'>
							Eco-Friendly &
						</div>
						<br />
						<div className='font-semibold text-4xl text-white '>
							on trend.
						</div>
						{/* button */}
						<div className='flex space-x-4 text-black font-semibold pt-4'>
							<button className='bg-white rounded-xl py-2 px-3'>
								Shop Men
							</button>
							<button className='bg-white rounded-xl py-2 px-3'>
								Shop Women
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
