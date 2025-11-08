import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { debugRoute } from "../utils/debug";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Debug the route when 404 page is shown
    debugRoute(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <h1 className="font-bold text-gray-300 text-9xl">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mb-8 text-gray-600">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Requested path:{" "}
            <code className="px-2 py-1 bg-gray-200 rounded">
              {location.pathname}
            </code>
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/home"
            className="inline-block px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Go to Home
          </Link>
          <div>
            <Link
              to="/login"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Back to Login
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          <p>Check the browser console for debug information.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
