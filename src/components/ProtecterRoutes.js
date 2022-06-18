import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router-dom';

export function ProtecterRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}  