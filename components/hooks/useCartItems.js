import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useCartItems = () => {
	const [cartItems, setCartItems] = useState([]);
	const { data: session } = useSession();
	const email = session?.user?.tokenUser;

	useEffect(() => {
		if (email) {
			fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cart/${email}`)
				.then((res) => res.json())
				.then((data) => {
					/* console.log(data.cartItems); */
					setCartItems(data.cartItems);
				});
		}
	}, [email, cartItems]);
	return { cartItems };
};

export default useCartItems;
