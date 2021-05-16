import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: 50,
      marginRight: theme.spacing(2),
    },
    btnStyles: {
      backgroundColor: 'white',
      color: 'orange',
      marginRight: theme.spacing(2),
    },
    appBar: {
      backgroundColor: 'orange',
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
    },
  })
);
