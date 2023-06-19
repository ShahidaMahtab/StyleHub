import React from 'react';
import { Collapse } from 'antd';
const manProducts = [
	'All Ready-to-Wear',
	'T-shirts and Polos',
	'Shirts',
	'Knitwear and Sweatshirts',
	'Blazers and Jackets',
	'Outerwear and Coats',
	'Pants',
	'Swimwear',
];
const womenProducts = [
	'Puffer Jackets',
	'Tops',
	'Dresses',
	'Skirts and Shorts',
	'Pants',
	'Knitwear',
	'Coats and Jackets',
	'Swimwear',
];
const LeatherProducts = ['Coming soon'];
const jewelryProducts = [
	'All Fashion Jewellery',
	'Earrings',
	'Necklaces and Pendants',
	'Bracelets',
	'Rings',
	'Brooches and Others',
];
const items = [
	{
		key: '1',
		label: <h1 className='text-xl font-semibold'>Men</h1>,
		children: (
			<div>
				{manProducts?.map((man) => (
					<h2 className='text-lg pl-2' key={man}>
						{man}
					</h2>
				))}
			</div>
		),
	},
	{
		key: '2',
		label: <h1 className='text-xl font-semibold'>Women</h1>,
		children: (
			<div>
				{womenProducts?.map((women) => (
					<h2 className='text-lg pl-2' key={women}>
						{women}
					</h2>
				))}
			</div>
		),
	},
	{
		key: '3',
		label: (
			<h1 className='text-xl font-semibold'>
				All Wallets & Small Leather Goods
			</h1>
		),
		children: (
			<div>
				{LeatherProducts?.map((leather) => (
					<h2 className='text-lg pl-2' key={leather}>
						{leather}
					</h2>
				))}
			</div>
		),
	},
	{
		key: '4',
		label: <h1 className='text-xl font-semibold'>Jewelry</h1>,
		children: (
			<div>
				{jewelryProducts.map((jewelry) => (
					<h2 className='text-lg pl-2' key={jewelry}>
						{jewelry}
					</h2>
				))}
			</div>
		),
	},
];

const NavigationContent = () => {
	return (
		<div className='container mx-auto'>
			<div className='w-1/4 pt-4'>
				<Collapse
					defaultActiveKey={['1']}
					ghost
					items={items}
					accordion
					expandIconPosition='right'
				/>
			</div>
		</div>
	);
};

export default NavigationContent;
