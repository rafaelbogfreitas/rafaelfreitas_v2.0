import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/auth';

const Signup = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (): void => {
    dispatch(signup(name, email, password));
    router.push('/admin/login');
  };

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '40%',
          margin: '0 auto',
        }}
      >
        <h1>signup</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          save
        </button>
      </div>
    </>
  );
};

export default Signup;
