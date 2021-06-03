import Head from 'next/head';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';
import connectToDb from '../database/connectToDb';
import { Project } from '../database/models';
import Navbar from '../components/Navbar';

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
  return (
    <div>
      <Head>
        <title>Rafael</title>
      </Head>
      <Navbar />
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
