import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth';

import { Button, Paper } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { loginValidation } from './validation';
import { LoginInitialValues } from '../../components/LoginForm/interfaces';

import { useStyles } from './styles';

const LoginForm = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loginInitialValues: LoginInitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: LoginInitialValues): void => {
    console.log(values);
    const { email, password } = values;
    dispatch(login(email, password));
  };
  return (
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
  );
};

export default LoginForm;
