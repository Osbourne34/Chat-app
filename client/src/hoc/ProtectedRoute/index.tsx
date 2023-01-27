import { ComponentType, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export const withProtectedRoute = <T extends {}>(
  Component: ComponentType<T>,
) => {
  return (props: T) => {
    const context = useContext(AuthContext);

    return context?.user ? <Component {...props} /> : <Navigate to="/login" />;
  };
};
