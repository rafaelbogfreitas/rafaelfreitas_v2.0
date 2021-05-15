import React from 'react';
import { useDispatch } from 'react-redux';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { logout } from '../../store/Auth.store';

const AdminAppBar = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <img
          className={classes.logo}
          src="/rf_logo.svg"
          alt="rafael freitas logo"
        />
        <Typography className={classes.title} variant="body1">
          Rafael Freitas
        </Typography>
        <Button
          variant="contained"
          onClick={() => dispatch(logout())}
          className={classes.logoutBtn}
        >
          logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminAppBar;
