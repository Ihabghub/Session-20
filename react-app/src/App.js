import React, { useState } from "react";
import ProductGrid from './Productgrid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // If the product already exists in the cart, increase the quantity
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Otherwise, add the product with a quantity of 1
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      const itemToDecrease = prevCart.find(item => item.id === productId);
      if (itemToDecrease.quantity === 1) {
        return prevCart.filter(item => item.id !== productId); // Remove item if quantity is 1
      }
      return prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <ProductGrid addToCart={addToCart} />
      <div className="mt-4">
        <h2 className="text-yellow-500 text-2xl mb-2">Shopping Cart</h2>
        <ul className="bg-white p-4 rounded shadow-md">
          {cart.length === 0 ? (
            <li className="text-gray-600">Your cart is empty.</li>
          ) : (
            cart.map((item) => (
              <li key={item.id} className="border-b py-2 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.images} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-red-600">{item.price}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                  <span className="text-lg">{item.quantity}</span>

                  <button
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 ml-2"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                </div>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
