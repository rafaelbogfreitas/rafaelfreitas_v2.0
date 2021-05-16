import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import AdminAppBar from '../../../components/AdminAppBar';
import ProjectForm from '../../../components/ProjectForm';

const NewProject = (): JSX.Element => {
  const router = useRouter();

  const refreshData = (): void => {
    router.replace(router.asPath);
  };

  return (
    <>
      <Head>
        <title>Criar projeto</title>
      </Head>
      <AdminAppBar title="Criar projeto" />
      <ProjectForm edit={false} refreshData={refreshData} />
    </>
  );
};

export default NewProject;
