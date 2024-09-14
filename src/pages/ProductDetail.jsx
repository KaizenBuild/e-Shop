import React, { useState, useEffect } from 'react';
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product, quantity));
    }
    alert("Product added to cart successfully")
  };

  if (!product) return <div className="text-center py-8">Loading ....</div>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
            <div className="md:w-1/4 mx-auto py-4 rounded-lg flex justify-center items-center overflow-hidden">
          <img
            src={product.image} alt={product.name}
            className="h-full object-cover transform transition-transform duration-300 hover:scale-110"/>
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-2xl font-semibold text-gray-700 mb-4">$ {(product.price * quantity).toFixed(2)}</p>
            <p className="text-gray-600 mb-4">
              {product.description || 'This is a high-quality product perfect for your needs.'}
            </p>

            <div className="flex items-center mb-4">
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 py-2 px-4 mr-4 rounded-lg w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="flex items-center text-gray-700 mb-4">
              <FaCarSide className="mr-2 text-blue-500" /> <span>Free Delivery & Easy Returns</span>
            </p>
            <p className="flex items-center text-gray-700">
              <FaQuestion className="mr-2 text-blue-500" /> <span>Need Help? Ask a Question</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


