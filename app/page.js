import Banner from '@/components/Home/Banner';
import StyleGuide from '../components/Home/StyleGuide';
import CategoryProduct from '../components/Home/CategoryProduct';

const Home = () => {
	return (
		<div className='space-y-20 '>
			<Banner />
			<StyleGuide />
			<CategoryProduct />
		</div>
	);
};

export default Home;
