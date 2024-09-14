import React from 'react';

const Login = ({openSignUp}) => {
  return (
    <div className="container mx-auto p-8 max-w-md">
      <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
      
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter your email" 
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter your password" 
          />
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="mb-6 flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" name="remember" className="mr-2 leading-tight" />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>

      {/* Sign Up Option */}
      <div className="text-center mt-6">
        <span className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button className="text-blue-500 hover:text-blue-700 font-bold" onClick={openSignUp}>Sign Up</button>
        </span>
      </div>
    </div>
  );
};

export default Login;
