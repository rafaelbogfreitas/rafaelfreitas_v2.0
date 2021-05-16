import Head from 'next/head';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { increaseCounter, decreaseCounter } from '../store/Counter.store';
import { ReactElement } from 'react';
import connectToDb from '../database/connectToDb';
import { Project } from '../database/models';

type Text = {
  ptBr: string;
  eng: string;
};

type Projects = {
  _id: string;
  title: string;
  href: string;
  linkGithub: string;
  alt: string;
  extraLink: boolean;
  imgSrc: string;
  paragraphs: Text[];
  extraParagraph: Text[];
  technologies: string[];
};

type HomeProps = {
  projects: Projects[];
};

const Home = ({ projects }: HomeProps): ReactElement => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: RootState) => state);

  const increaseCount = (): void => {
    dispatch(increaseCounter());
  };

  const decreaseCount = (): void => {
    dispatch(decreaseCounter());
  };

  return (
    <div>
      <Head>
        <title>Rafael</title>
      </Head>
      <h1>{counter.value}</h1>
      <button onClick={increaseCount}>INCREASE</button>
      <button onClick={decreaseCount}>DECREASE</button>
      {projects.map((item, i) => (
        <div key={i}>{JSON.stringify(item)}</div>
      ))}
      <Image
        width={190}
        height={190}
        objectFit="cover"
        src="/images/rafael.svg"
        alt="Rafael's cartoon"
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await connectToDb();
  const projects = await Project.find({});

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)) ?? [],
    },
    revalidate: 1,
  };
};

export default Home;
