import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/ui';

import { RegisterFormFields } from '../../Types';

export const Register: FC = () => {
  const { handleSubmit, register, formState, getValues } =
    useForm<RegisterFormFields>();

  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center">
      <div className="flex-grow border max-w-xl p-5 mx-auto">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register('email', { required: true })}
            placeholder="Email"
          />
          <Input {...register('name', { required: true })} placeholder="Name" />
          <Input
            type="password"
            {...register('password', { required: true })}
            placeholder="Password"
          />

          <Input
            type="password"
            {...register('confirmPassword', {
              validate: (value) => {
                const { password } = getValues();
                return password === value || 'Passwords should match!';
              },
            })}
            helperText={formState.errors.confirmPassword?.message}
            placeholder="Confirm Password"
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
