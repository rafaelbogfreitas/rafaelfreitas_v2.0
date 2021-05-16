import React from 'react';
import { useDispatch } from 'react-redux';

import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { logout } from '../../store/Auth.store';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface AdminAppBarProps {
  title?: string;
}

const AdminAppBar = ({ title }: AdminAppBarProps): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const isNewProjectPage = router.pathname === '/admin/project/new';

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Link href="/admin">
          <img
            className={classes.logo}
            src="/rf_logo.svg"
            alt="rafael freitas logo"
          />
        </Link>
        <Typography className={classes.title} variant="body1">
          {title}
        </Typography>
        {!isNewProjectPage && (
          <Link href="/admin/project/new">
            <Button variant="contained" className={classes.btnStyles}>
              new project
            </Button>
          </Link>
        )}
        <Button
          variant="contained"
          onClick={() => dispatch(logout())}
          className={classes.btnStyles}
        >
          logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AdminAppBar;
