import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAuthContext } from '../../context';

import { withPublicRoute } from '../../hoc';
import { Input, Button } from '../../components/ui';

import { RegisterFormFields } from '../../Types';

const schema = yup.object({
  email: yup.string().required('Required field').email('Invalid Email'),
  name: yup
    .string()
    .trim()
    .required('Required field')
    .min(3, 'Name must contain at least 3 Characters'),
  password: yup
    .string()
    .trim()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Password must contain at least 8 Characters, one Upper and Lower case letter and one Number'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords does not match'),
});

const RegisterPage: FC = () => {
  const { registerUser, setRegisterError, registerError } = useAuthContext();
  const { handleSubmit, register, formState } = useForm<RegisterFormFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: RegisterFormFields) => {
    const { confirmPassword, ...body } = data;

    await registerUser(body);
  };

  useEffect(() => {
    return () => {
      setRegisterError('');
    };
  }, []);

  return (
    <div className="h-screen flex items-center">
      <div className="flex-grow max-w-xl p-5 mx-auto">
        <h1 className="text-4xl font-medium mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {registerError && (
            <div className="px-4 py-3 bg-red-200 text-red-900 rounded-md">
              {registerError}
            </div>
          )}
          <Input
            {...register('email')}
            helperText={formState.errors.email?.message}
            error={!!formState.errors.email}
            placeholder="Email"
          />
          <Input
            {...register('name')}
            helperText={formState.errors.name?.message}
            error={!!formState.errors.name}
            placeholder="Name"
          />
          <Input
            {...register('password')}
            helperText={formState.errors.password?.message}
            error={!!formState.errors.password}
            type="password"
            placeholder="Password"
          />
          <Input
            {...register('confirmPassword')}
            helperText={formState.errors.confirmPassword?.message}
            error={!!formState.errors.confirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
          <Button disabled={formState.isSubmitting} type="submit" fullWidth>
            Register
          </Button>
        </form>
        <p className="mt-3 text-center">
          Already registered?&nbsp;
          <Link to="/login" className="hover:underline text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export const Register = withPublicRoute(RegisterPage);
