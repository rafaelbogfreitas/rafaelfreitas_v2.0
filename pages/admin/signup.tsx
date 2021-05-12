import React from 'react';
import Head from 'next/head';

import SignupForm from '../../components/SignupForm';

const Signup = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <SignupForm />
    </>
  );
};

export default Signup;
