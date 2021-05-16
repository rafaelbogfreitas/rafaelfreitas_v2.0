import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperStyles: {
      padding: theme.spacing(4),
      maxWidth: 800,
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
    formStyles: {
      width: '100%',
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
    inputStyles: {
      width: '100%',
    },
    buttonStyles: {
      backgroundColor: 'orange',
      color: 'white',
      marginRight: theme.spacing(2),
    },
  })
);
