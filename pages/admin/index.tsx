import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RootState } from '../../store';

import connectToDb from '../../database/connectToDb';
import { Project } from '../../database/models';
import AdminAppBar from '../../components/AdminAppBar';
interface ProjectsList {
  _id: string;
  title: string;
}
interface AdminHomeProps {
  projectsList: ProjectsList[];
}

const AdminHome = ({ projectsList }: AdminHomeProps): JSX.Element => {
  const { authToken } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  if (!authToken) {
    router.push('/admin/login');
  }

  return (
    <>
      <Head>
        <title>Admin | Home</title>
      </Head>
      <AdminAppBar />
      <div>
        {projectsList.map((project, i) => (
          <div key={i}>{project.title}</div>
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await connectToDb();
  const list = await Project.find({}, { title: 1 });

  return {
    props: {
      projectsList: JSON.parse(JSON.stringify(list)) ?? [],
    },
    revalidate: 60 * 60,
  };
};

export default AdminHome;
