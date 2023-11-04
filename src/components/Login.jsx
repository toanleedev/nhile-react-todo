import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import yup from '../helpers/yupGlobal';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
});

function Login({ handleLogin, resError }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  return (
    <div className=''>
      <form onSubmit={handleSubmit(handleLogin)} className='box'>
        <h1 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-5'>
          LOGIN
        </h1>
        {resError && (
          <div className='px-[10px] py-3 mb-3 bg-red-100 rounded text-red-800 text-left'>
            {resError}
          </div>
        )}
        <div className='input-field'>
          <input
            placeholder='Email'
            className={`${
              errors.email ? 'focus:ring-red-500 ring-red-500' : ''
            } block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2`}
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-400 mb-5 text-left'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className='input-field'>
          <input
            type='password'
            className={`${
              errors.password ? 'focus:ring-red-500 ring-red-500' : ''
            } block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-3`}
            placeholder='Password'
            autoComplete='off'
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-400 mb-5 text-left'>
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          id='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
