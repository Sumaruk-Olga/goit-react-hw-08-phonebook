import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {

const isLoggedIn = true;
const isRefreshing = true;


  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};