import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchterm } from '../redux/productSlice';


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e)=>{
    e.preventDefault()
    dispatch(setSearchterm(search))
    navigate('/filter-data')
  }
  // Open Signup modal
  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  // Open Login modal
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg front-bold">
          <Link to="/"><b>e-SHOP</b></Link>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search product"
              className="w-full border py-2 px-4" onChange={(e)=>setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        {/* Cart and Login/Register */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={openLogin} // Trigger login modal on click
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser onClick={openLogin} />
          </button>
        </div>
      </div>

      {/* Nav*/}
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:underline">
          HOME
        </Link>
        <Link to="/shop" className="hover:underline">
          SHOP
        </Link>
        <Link to="/contact" className="hover:underline">
          CONTACT
        </Link>
        <Link to="/about" className="hover:underline">
          ABOUT
        </Link>
      </div>

      {/* Modal */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} /> 
        ) : (
          <Register openLogin={openLogin} /> 
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;