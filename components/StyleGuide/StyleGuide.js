import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function StyleGuide({ product }) {
	const { title, _id, image, price, color, size } = product || {};
	return (
		<div className='mt-4'>
			<Link href={`/product-details/${_id}`}>
				<Image
					className='border rounded-xl'
					src={image ? image : ''}
					width={500}
					height={500}
					alt={title ? title : ''}
				/>
				<small className='text-gray-700 text-bold'>{title}</small>
				<br />
				<small className='font-bold'>${price}</small>
				<div className='flex justify-center items-center'>
					{/* {color.map((c) => (
            <input
              type="radio"
              id="radio-button"
              style={{ backgroundColor: `${c}` }}
              className="w-4 h-4 border-2 border-gray-300 rounded-full appearance-none checked:bg-blue-500 checked:border-blue-500 focus:outline-none ring-2 ring-transparent"
            />
          ))} */}
				</div>
			</Link>
		</div>
	);
}
