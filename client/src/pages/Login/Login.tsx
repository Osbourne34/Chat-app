import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuthContext } from '../../context';

import { withPublicRoute } from '../../hoc';
import { Input, Button } from '../../components/ui';

import { LoginFormFields } from '../../Types';

const schema = yup.object({
  email: yup.string().required('Required field').email('Invalid Email'),
  password: yup
    .string()
    .trim()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Password must contain at least 8 Characters, one Upper and Lower case letter and one Number'
    ),
});

const LoginPage: FC = () => {
  const { loginUser, setLoginError, loginError } = useAuthContext();
  const { handleSubmit, register, formState } = useForm<LoginFormFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormFields) => {
    await loginUser(data);
  };

  useEffect(() => {
    return () => {
      setLoginError('');
    };
  }, []);

  return (
    <div className="h-screen flex items-center">
      <div className="flex-grow max-w-xl p-5 mx-auto">
        <h1 className="text-4xl font-medium mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {loginError && (
            <div className="px-4 py-3 bg-red-200 text-red-900 rounded-md">
              {loginError}
            </div>
          )}
          <Input
            {...register('email')}
            helperText={formState.errors.email?.message}
            error={!!formState.errors.email}
            placeholder="Email"
          />
          <Input
            {...register('password')}
            helperText={formState.errors.password?.message}
            error={!!formState.errors.password}
            type="password"
            placeholder="Password"
          />
          <Button disabled={formState.isSubmitting} type="submit" fullWidth>
            Login
          </Button>
        </form>
        <p className="mt-3 text-center">
          No account?&nbsp;
          <Link to="/register" className="hover:underline text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export const Login = withPublicRoute(LoginPage);
