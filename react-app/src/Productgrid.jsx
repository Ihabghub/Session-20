import React from 'react';

const products = [
  {
    id: 1,
    image: './img5.jpg',
    title: 'Product 1',
    price: '$29.99',
    description: 'This is a great product!',
  },
  {
    id: 2,
    image: './img7.jpg',
    title: 'Product 2',
    price: '$39.99',
    description: 'This product is also amazing.',
  },
  {
    id: 3,
    image: './img1.jpg',
    title: 'Product 3',
    price: '$49.99',
    description: "Don't miss out on this one!",
  },
  {
    id: 4,
    image: './images.jpg',
    title: 'Product 4',
    price: '$59.99',
    description: 'Amazing value for your money!',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img src={product.image} alt={product.title} className="w-full h-44 object-contain mb-2" />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-xl text-red-600 mb-2">{product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button className="bg-yellow-500 border border-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-600">
        Buy Now
      </button>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
