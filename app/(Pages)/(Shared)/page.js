'use client';
import Banner from '@/components/Home/Banner';
import CategoryProduct from '@/components/Home/CategoryProduct';
import StyleGuide from '@/components/Home/StyleGuide';

const Home = () => {
	return (
		<div className='space-y-16 '>
			<Banner />
			<StyleGuide />
			<CategoryProduct />
		</div>
	);
};

export default Home;
