import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to an API or email
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Contact Form */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-6 mt-8 md:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="flex items-center text-gray-600 mb-4">
              <FaPhoneAlt className="mr-3 text-blue-500" /> +1 123 456 7890
            </p>
            <p className="flex items-center text-gray-600 mb-4">
              <FaEnvelope className="mr-3 text-blue-500" /> support@eshop.com
            </p>
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-3 text-blue-500" /> 123 E-Shop St., Suite 100, San Francisco, CA
            </p>
          </div>

          {/* Customer Support */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Customer Support</h3>
            <p className="text-gray-600 mb-4">
              If you need immediate assistance, feel free to contact our support team. We are here to help you with
              your orders, returns, or any other inquiries.
            </p>
            <p className="text-gray-600">Email: support@eshop.com</p>
            <p className="text-gray-600">Phone: +1 123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
