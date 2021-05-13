import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/Auth.store';

import { Button, Paper } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Loader from '../Loader';

import { loginValidation } from './validation';
import { LoginInitialValues } from '../../components/LoginForm/interfaces';

import { useStyles } from './styles';
import { RootState } from '../../store';

const LoginForm = (): JSX.Element => {
  const { loggingIn } = useSelector((state: RootState) => state.auth);
  const classes = useStyles();
  const dispatch = useDispatch();

  const loginInitialValues: LoginInitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: LoginInitialValues): void => {
    const { email, password } = values;
    dispatch(login(email, password));
  };

  return (
    <div className={classes.loginContainer}>
      <Paper className={classes.paperStyles}>
        <img className={classes.logoStyles} src="/rf_logo.svg" alt="logo" />
        {loggingIn ? (
          <Loader />
        ) : (
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidation}
            onSubmit={(values, { resetForm }) => {
              resetForm({ values: loginInitialValues });
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
        )}
      </Paper>
    </div>
  );
};

export default LoginForm;
