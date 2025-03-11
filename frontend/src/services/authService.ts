import api from './api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  userType: 'patient' | 'medicalStudent';
}

const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

const register = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
};

const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

const authService = {
  login,
  register,
  logout,
  getCurrentUser
};

export default authService;
