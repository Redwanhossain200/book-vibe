import React from 'react';
import { Link } from 'react-router';
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        <p className="text-gray-400 mt-3">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-red-400 hover:bg-red-500 rounded-full text-white font-medium transition duration-300 shadow-lg">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
