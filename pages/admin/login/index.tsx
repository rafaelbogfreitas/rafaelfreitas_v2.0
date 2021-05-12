import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import { RootStore } from '../../../redux/store';

import { Button, Paper } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { loginValidation } from './validation';
import { LoginInitialValues } from './interfaces';

import { useStyles } from './styles';

const Login = (): JSX.Element => {
  const { auth } = useSelector((state: RootStore) => state);

  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();

  const loginInitialValues: LoginInitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: LoginInitialValues): void => {
    console.log(values);
    const { email, password } = values;
    dispatch(login(email, password));
  };

  if (auth.authToken) {
    router.push('/admin');
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={classes.loginContainer}>
        <Paper className={classes.paperStyles}>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidation}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form className={classes.formStyles}>
              <Field
                label="Email"
                name="email"
                variant="outlined"
                className={classes.inputStyles}
                component={TextField}
              />
              <Field
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                className={classes.inputStyles}
                component={TextField}
              />
              <Button
                type="submit"
                className={classes.buttonStyles}
                variant="contained"
              >
                Login
              </Button>
            </Form>
          </Formik>
        </Paper>
      </div>
    </>
  );
};

export default Login;
