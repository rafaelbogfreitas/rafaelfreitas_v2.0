import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import LoginForm from '../../components/LoginForm';

const Login = (): JSX.Element => {
  const { auth } = useSelector((state: RootState) => state);
  const { user } = auth;

  const router = useRouter();

  if (user) {
    router.push('/admin');
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
