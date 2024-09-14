import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import me from '../assets/Images/me.png'

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">


      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About e-SHOP</h2>
        <p className="text-gray-600 text-lg">
          Welcome to <span className="font-semibold">e-SHOP</span>, your one-stop online shopping destination for everything you need.
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-6">Our Mission</h3>
        <p className="text-gray-600 text-center mx-auto leading-relaxed max-w-3xl">
          At <span className="font-semibold">e-SHOP</span>, our mission is to provide high-quality products at affordable prices while delivering the best customer service. We aim to revolutionize the online shopping experience by offering a seamless and enjoyable journey from the moment you browse to when your products arrive at your door.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
          <FaCheckCircle className="text-blue-500 text-4xl mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Quality Products</h4>
          <p className="text-gray-600">
            We source our products from trusted suppliers to ensure the highest quality and durability for our customers.
          </p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
          <FaCheckCircle className="text-blue-500 text-4xl mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Exceptional Customer Support</h4>
          <p className="text-gray-600">
            Our dedicated customer support team is here to help you with any queries or concerns you may have.
          </p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
          <FaCheckCircle className="text-blue-500 text-4xl mx-auto mb-4" />
          <h4 className="text-xl font-semibold mb-2">Fast & Secure Delivery</h4>
          <p className="text-gray-600">
            We partner with leading logistics providers to ensure fast, secure, and reliable delivery for every order.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-6">Meet the Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={me}
              alt="Team Member"
              className="h-32 w-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold mb-2">Kaizen</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={me}
              alt="Team Member"
              className="h-32 w-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold mb-2">Jane Smith</h4>
            <p className="text-gray-600">Head of Marketing</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src={me}
              alt="Team Member"
              className="h-32 w-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h4 className="text-lg font-semibold mb-2">Samuel Lee</h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Join Our Journey</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We’re committed to providing the best products and services to our customers. Stay connected with us and follow our journey as we continue to grow.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
