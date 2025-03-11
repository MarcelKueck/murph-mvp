import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-700">Murph</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/login" className="text-secondary-600 hover:text-primary-600">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="btn-primary">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Medical Guidance When You Need It
          </h1>
          <p className="text-xl text-secondary-600 mb-8">
            Murph connects you with knowledgeable medical students for accessible
            guidance, explanation, and appropriate triage.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="btn-primary px-8 py-3">
              Get Started
            </Link>
            <Link to="/about" className="btn-secondary px-8 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
