import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './components/layout/MainLayout';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Auth pages will be implemented later
const Login = lazy(() => import('./pages/Home')); // Placeholder
const Register = lazy(() => import('./pages/Home')); // Placeholder

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
