
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
const isLoggedIn = true;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
