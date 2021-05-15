import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: 50,
      marginRight: theme.spacing(2),
    },
    logoutBtn: {
      backgroundColor: 'white',
      color: 'orange',
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
