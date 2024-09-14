import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate()
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Thank you for your order</h2>
      <p className="text-center text-lg mb-6">Your order has been placed successfully, you will receive an email confirmation.</p>
      
      <div className="border-t border-gray-300 pt-4">
        {/* Order Summary */}
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <p className="mb-2"><span className="font-semibold">Order Number:</span> {order.orderNumber}</p>

        {/* Shipping Information */}
        <div className="border rounded-lg p-4 mb-4 bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
          <p className="mb-1"><span className="font-semibold">Address:</span> {order.shippingInformation.address}</p>
          <p className="mb-1"><span className="font-semibold">City:</span> {order.shippingInformation.city}</p>
          <p className="mb-1"><span className="font-semibold">Zip Code:</span> {order.shippingInformation.zip}</p>
        </div>

        {/* Products Ordered */}
        <div className="border rounded-lg p-4 mb-4 bg-white shadow-md">
          <h3 className="text-xl font-semibold mb-4">Products Ordered</h3>
          {order.products.map((product, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <p className="text-lg">{product.name} x {product.quantity}</p>
              <p className="text-lg font-semibold">&#8377;{product.price * product.quantity}</p>
            </div>
          ))}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-4 mb-6">
          <span className="text-lg font-semibold">Total Price:</span>
          <span className="text-lg font-semibold text-green-600">&#8377;{order.totalPrice}</span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Order Tracking</button>
          <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
