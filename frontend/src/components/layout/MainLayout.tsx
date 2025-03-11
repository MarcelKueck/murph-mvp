import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <div className="text-xl font-bold text-primary-700 mb-8">Murph</div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 rounded-md hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/consultations"
                  className="block px-4 py-2 rounded-md hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
                >
                  Consultations
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="block px-4 py-2 rounded-md hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
                >
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 rounded-md hover:bg-primary-50 text-secondary-700 hover:text-primary-700"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="md:hidden text-xl font-bold text-primary-700">Murph</div>
          <div className="flex items-center space-x-4">
            <button className="text-secondary-600 hover:text-primary-600">
              Notifications
            </button>
            <div className="relative">
              <button className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center text-primary-700">
                U
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
