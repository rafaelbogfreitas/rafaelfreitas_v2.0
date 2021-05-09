import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RootStore } from '../../redux/store';
import { logout } from '../../redux/actions/auth';

import connectToDb from '../../database/connectToDb';
import { Project } from '../../database/models';
interface ProjectsList {
  _id: string;
  title: string;
}

interface AdminHomeProps {
  projectsList: ProjectsList[];
}

const AdminHome = ({ projectsList }: AdminHomeProps): JSX.Element => {
  const { authToken } = useSelector((state: RootStore) => state.auth);

  const dispatch = useDispatch();
  const router = useRouter();

  if (!authToken) {
    router.push('/admin/login');
  }

  return (
    <div>
      {projectsList.map((project, i) => (
        <div key={i}>{project.title}</div>
      ))}
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
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
