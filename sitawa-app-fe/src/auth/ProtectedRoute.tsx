// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type ProtectedRouteProps = {
  children: JSX.Element;
  allowedRoles: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { userRole } = useAuth();

  // if (!userRole || !allowedRoles.includes(userRole)) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default ProtectedRoute;
