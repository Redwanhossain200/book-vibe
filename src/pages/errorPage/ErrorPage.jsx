import React from 'react';
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        
        <div className="space-y-4 mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-gray-500 text-lg">
            The page you are looking for does not exist.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => navigate(-1)}
            className="btn-outline px-8"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="btn-primary px-8"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
