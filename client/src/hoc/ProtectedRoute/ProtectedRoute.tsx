import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context';

export const withProtectedRoute = <T extends {}>(
  Component: ComponentType<T>
) => {
  return (props: T) => {
    const { user } = useAuthContext();

    return user ? <Component {...props} /> : <Navigate to="/login" />;
  };
};
