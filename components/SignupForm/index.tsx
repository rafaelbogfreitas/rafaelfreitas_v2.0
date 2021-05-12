import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/auth';

import { Button, Paper } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import { signupValidation } from './validation';
import { useStyles } from './styles';
import { SignupInitialValues } from '../../components/SignupForm/interfaces';

const SignupForm = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const signupInitialValues: SignupInitialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values: SignupInitialValues): void => {
    console.log(values);
    const { name, email, password } = values;
    dispatch(signup(name, email, password));
    router.push('/admin/login');
  };

  return (
    <div className={classes.loginContainer}>
      <Paper className={classes.paperStyles}>
        <Formik
          initialValues={signupInitialValues}
          validationSchema={signupValidation}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className={classes.formStyles}>
            <Field
              label="Nome"
              name="name"
              variant="outlined"
              className={classes.inputStyles}
              component={TextField}
            />
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
              Signup
            </Button>
          </Form>
        </Formik>
      </Paper>
    </div>
  );
};

export default SignupForm;
