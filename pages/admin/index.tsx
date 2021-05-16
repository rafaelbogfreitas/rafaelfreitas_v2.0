import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { RootState } from '../../store';

import connectToDb from '../../database/connectToDb';
import { Project } from '../../database/models';
import AdminAppBar from '../../components/AdminAppBar';
import ProjectsList from '../../components/ProjectsList';
interface Projects {
  _id: string;
  title: string;
}
interface AdminHomeProps {
  projectsList: Projects[];
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
      <ProjectsList projectsList={projectsList} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await connectToDb();
  const list = await Project.find({}, { title: 1 });

  return {
    props: {
      projectsList: JSON.parse(JSON.stringify(list)) ?? [],
    },
  };
};

export default AdminHome;
