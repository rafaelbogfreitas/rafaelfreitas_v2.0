import { ReactElement } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const About = (): ReactElement => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div>About</div>
    </>
  );
};

export default About;
