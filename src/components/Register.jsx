import React from 'react'

const Register = ({openLogin}) => {
    return (
        <div className="container mx-auto p-8 max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

            <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your Name"
                    />
                </div>

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

                {/* Login Button */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign Up
                    </button>
                </div>
            </form>

            {/* Sign Up Option */}
            <div className="text-center mt-6">
                <span className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button className="text-blue-500 hover:text-blue-700 font-bold" onClick={openLogin}>Login</button>
                </span>
            </div>
        </div>
    )
}

export default Register