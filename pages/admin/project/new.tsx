import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import AdminAppBar from '../../../components/AdminAppBar';
import ProjectForm from '../../../components/ProjectForm';

const NewProject = () => {
  const router = useRouter();
  const refreshData = (): void => {
    setTimeout(() => {
      router.replace(router.asPath);
    }, 1000);
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
