import Sidebar from '@/components/Dashboard/Sidebar';
import React from 'react';

const MyLayout = ({ children }) => {
	return (
		<>
			<div className='grid grid-cols-12 bg-[#F9F7F7]'>
				<div className='col-span-2'>
					<Sidebar />
				</div>
				<div className='col-span-10'>{children}</div>
			</div>
		</>
	);
};

export default MyLayout;
