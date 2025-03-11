import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-50 px-4">
      <h1 className="text-6xl font-bold text-secondary-400">404</h1>
      <h2 className="text-2xl font-semibold text-secondary-700 mt-4 mb-6">Page Not Found</h2>
      <p className="text-secondary-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
