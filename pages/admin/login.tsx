import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (): void => {
    dispatch(login(email, password));
    router.push('/admin');
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '40%',
          margin: '0 auto',
        }}
      >
        <h1>Login</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          login
        </button>
      </div>
    </>
  );
};

export default Login;
