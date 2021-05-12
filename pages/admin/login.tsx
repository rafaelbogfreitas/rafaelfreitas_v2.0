import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';

import LoginForm from '../../components/LoginForm';

const Login = (): JSX.Element => {
  const { auth } = useSelector((state: RootStore) => state);

  const router = useRouter();

  if (auth.authToken) {
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
