import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { RootStore } from '../../redux/store';
import { logout } from '../../redux/actions/auth';
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
  const response = await fetch(`${process.env.BASE_URL}api/projects/list`);
  const list = await response.json();

  return {
    props: {
      projectsList: list,
    },
    revalidate: 60 * 60,
  };
};

export default AdminHome;
