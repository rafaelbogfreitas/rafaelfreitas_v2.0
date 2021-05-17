import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';

import { useStyles } from './styles';
import { axiosInstance } from '../../api/axios';
import { useDispatch } from 'react-redux';
import { alert } from '../../store/Alert.store';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Text = {
  ptbr: string;
  eng: string;
};

type Project = {
  _id?: string;
  title: string;
  href: string;
  linkGitHub: string;
  alt: string;
  extraLink?: boolean;
  imgSrc: string;
  paragraphs: Text[];
  extraParagraph?: boolean;
  technologies: string[];
};

interface ProjectFormProps {
  project?: Project;
  refreshData: () => void;
  edit?: boolean;
}

type FormikInitialValues = {
  title: string;
  href: string;
  github: string;
  alt: string;
  img: string;
  technologies: string;
  ptbrContent: string;
  engContent: string;
};

const ProjectForm = ({
  project,
  refreshData,
  edit = false,
}: ProjectFormProps): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  let formikInitialValues = {
    title: '',
    github: '',
    href: '',
    alt: '',
    img: '',
    technologies: '',
    ptbrContent: '',
    engContent: '',
  };

  if (edit && project) {
    formikInitialValues = {
      title: project.title,
      github: project.linkGitHub,
      href: project.href,
      alt: project.alt,
      img: project.imgSrc,
      technologies: project.technologies.join(', '),
      ptbrContent: project.paragraphs.map((item) => item.ptbr).join('\n'),
      engContent: project.paragraphs.map((item) => item.eng).join('\n'),
    };
  }

  const prepareContentToSubmit = (
    ptbrArr: string[],
    engArr: string[]
  ): Text[] => {
    let result: Text[] = [];
    const longestContentLength = Math.max(ptbrArr.length, engArr.length);

    for (let i = 0; i < longestContentLength; i++) {
      const ptbr = ptbrArr[i] || '';
      const eng = engArr[i] || '';

      result = [...result, { ptbr, eng }];
    }
    return result;
  };

  const handleSubmit = async (values: FormikInitialValues): Promise<void> => {
    const method = edit ? axiosInstance.patch : axiosInstance.put;
    const endpoint = edit ? '/projects/update' : '/projects/create';
    let updatedData: Project = {
      ...values,
      linkGitHub: values.github,
      imgSrc: values.img,
      technologies: values.technologies.split(', '),
      paragraphs: prepareContentToSubmit(
        values.ptbrContent.split('\n'),
        values.engContent.split('\n')
      ),
    };

    if (project) {
      updatedData = {
        _id: project._id,
        ...updatedData,
      };
    }

    try {
      const { data } = await method(endpoint, {
        ...updatedData,
      });

      dispatch(alert(data.message));

      refreshData();

      if (!edit) {
        router.push('/admin');
      }
    } catch (err) {
      console.log(err);
      dispatch(alert(err.response.data.message, 'error'));
    }
  };

  return (
    <Paper elevation={3} className={classes.paperStyles}>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className={classes.formStyles}>
          <Field
            fullWidth
            variant="outlined"
            component={TextField}
            name="title"
            label="Title"
          />
          <Field
            fullWidth
            variant="outlined"
            component={TextField}
            name="github"
            label="Github"
          />
          <Field
            fullWidth
            variant="outlined"
            component={TextField}
            name="href"
            label="Href"
          />
          <Field
            fullWidth
            variant="outlined"
            component={TextField}
            name="alt"
            label="Alt"
          />
          <Field
            fullWidth
            variant="outlined"
            component={TextField}
            name="img"
            label="Image source"
          />
          <Field
            fullWidth
            variant="outlined"
            component={TextField}
            name="technologies"
            label="Technologies"
          />
          <Field
            fullWidth
            multiline
            variant="outlined"
            component={TextField}
            name="ptbrContent"
            label="Conteúdo - Português"
          />
          <Field
            fullWidth
            multiline
            variant="outlined"
            component={TextField}
            name="engContent"
            label="Conteúdo - Inglês"
          />
          <Link href="/admin">
            <Button variant="contained" className={classes.buttonStyles}>
              Voltar
            </Button>
          </Link>
          <Button
            variant="contained"
            className={classes.buttonStyles}
            type="submit"
          >
            Salvar
          </Button>
        </Form>
      </Formik>
    </Paper>
  );
};

export default ProjectForm;
