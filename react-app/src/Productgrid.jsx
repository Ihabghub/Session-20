import React from 'react';
import Slider from 'react-slick'; // Import React Slick

const products = [
  {
    id: 1,
    images: ['/img5.jpg', '/img2.jpg'], // Add multiple images
    title: 'Product 1',
    price: '$29.99',
    description: 'This is a great product!',
  },
  {
    id: 2,
    images: ['/img7.jpg', '/images.jpg'], // Add multiple images
    title: 'Product 2',
    price: '$39.99',
    description: 'This product is also amazing.',
  },
  {
    id: 3,
    images: ['/img1.jpg', '/img8.jpg'], // Add multiple images
    title: 'Product 3',
    price: '$49.99',
    description: "Don't miss out on this one!",
  },
  {
    id: 4,
    images: ['/img4.jpg', '/img6.jpg'], // Add multiple images
    title: 'Product 4',
    price: '$59.99',
    description: 'Amazing value for your money!',
  },
];

const ProductCard = ({ product, addToCart }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={product.title} className="w-full h-44 object-contain mb-2" />
          </div>
        ))}
      </Slider>
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-xl text-red-600 mb-2">{product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button
        className="bg-yellow-500 border border-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-600"
        onClick={() => addToCart(product)}
      >
        Buy Now
      </button>
    </div>
  );
};

const ProductGrid = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
