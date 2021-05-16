import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerStyles: {
      color: 'orange',
    },
    paperStyles: {
      margin: '0 auto',
      maxWidth: 800,
      marginTop: theme.spacing(2),
    },
    listStyle: {
      marginTop: theme.spacing(2),
    },
  })
);
