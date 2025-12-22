import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[var(--color-background)]">
      <h1 className="text-9xl font-bold text-[var(--color-primary)] opacity-20">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 -mt-12 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full font-bold hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
