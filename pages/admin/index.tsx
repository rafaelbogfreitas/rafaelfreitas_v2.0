import React, { useState } from 'react';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RootState } from '../../store';
import { logout } from '../../store/Auth.store';

import connectToDb from '../../database/connectToDb';
import { Project } from '../../database/models';

//testing
import { Button } from '@material-ui/core';
import { axiosInstance } from '../../api/axios';
interface ProjectsList {
  _id: string;
  title: string;
}

interface AdminHomeProps {
  projectsList: ProjectsList[];
}

const AdminHome = ({ projectsList }: AdminHomeProps): JSX.Element => {
  const { authToken } = useSelector((state: RootState) => state.auth);

  const [projects, setProjects] = useState<ProjectsList[]>([]);

  const dispatch = useDispatch();
  const router = useRouter();

  if (!authToken) {
    router.push('/admin/login');
  }

  const getProjects = async (): Promise<void> => {
    try {
      const { data: projects } = await axiosInstance.get<ProjectsList[]>(
        'projects/list',
        {}
      );
      setProjects(projects);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Head>
        <title>Admin | Home</title>
      </Head>
      <div>
        {projectsList.map((project, i) => (
          <div key={i}>{project.title}</div>
        ))}
        {JSON.stringify(projects)}
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
        <Button onClick={getProjects}>Get Projects</Button>
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
