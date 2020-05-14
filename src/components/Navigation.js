import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//CartContext
import { CartContext } from '../contexts'

const Navigation = () => {
	const cart = useContext(CartContext)
	console.log(cart)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
