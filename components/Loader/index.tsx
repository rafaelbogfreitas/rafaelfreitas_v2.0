import React from 'react';

import { CircularProgress } from '@material-ui/core';

import { useStyles } from './styles';

const Loader = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <CircularProgress className={classes.loaderStyles} />
    </div>
  );
};

export default Loader;
