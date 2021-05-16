import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

import connectToDb from '../../../database/connectToDb';
import { Project } from '../../../database/models';

import AdminAppBar from '../../../components/AdminAppBar';
import ProjectForm from '../../../components/ProjectForm';
import Head from 'next/head';

type Text = {
  ptBr: string;
  eng: string;
};

type Project = {
  _id: string;
  title: string;
  href: string;
  linkGitHub: string;
  alt: string;
  extraLink: boolean;
  imgSrc: string;
  paragraphs: Text[];
  extraParagraph: Text[];
  technologies: string[];
};

interface EditProjectProps {
  project: Project;
}

const EditProject = ({ project }: EditProjectProps): JSX.Element => {
  const router = useRouter();
  const { auth } = useSelector((state: RootState) => state);

  const { title } = project;

  if (!auth.authToken) {
    router.push('/admin/login');
  }

  const refreshData = (): void => {
    router.replace(router.asPath);
  };

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <AdminAppBar title={title} />
      <ProjectForm edit project={project} refreshData={refreshData} />
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   await connectToDb();
//   const list = await Project.find({});

//   const paths = list.map((item) => {
//     return {
//       params: {
//         projectId: String(item._id),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.projectId;

  await connectToDb();
  const [project] = await Project.find({ _id: id });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: JSON.parse(JSON.stringify(project)),
    },
  };
};

export default EditProject;
