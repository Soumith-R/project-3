import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Icon */}
      <div className="mb-6">
        <svg
          className="w-20 h-20 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="3" fill="none" />
          <path
            d="M16 20h16M16 28h16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}