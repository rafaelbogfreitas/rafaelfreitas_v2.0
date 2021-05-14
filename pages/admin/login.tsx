import React from 'react';

import Head from 'next/head';

import LoginForm from '../../components/LoginForm';

const Login = (): JSX.Element => {
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
