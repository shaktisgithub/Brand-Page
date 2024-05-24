import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../signup/signup';
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" className="w-full border rounded-md py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3 mt-1 text-gray-700 focus:outline-none focus:border-indigo-500" />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600">Login</button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600 block mb-2">Don't have an account?</span>
          <Link to='/signUp'>
            <button className="block w-full bg-gray-200 text-indigo-500 py-2 px-4 rounded-md focus:outline-none focus:bg-gray-300">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
