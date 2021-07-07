import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//context
import { ProductContext, CartContext } from './contexts'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart	
		setCart([...cart, item])
	};

	const removeItem = item => {
		let filteredCart = cart.filter(cartItem =>  cartItem.id !== item)
		setCart(filteredCart)
		console.log(filteredCart)
	}

	return (
		<div className="App">
			{/* wrap components in ProductContext */}
			<ProductContext.Provider value={{ products, addItem, removeItem }}>
				<CartContext.Provider value={cart}>
					<Navigation />
					{/* Routes */}
					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
