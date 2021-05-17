import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyles: {
      display: 'block',
      width: '20%',
      margin: '0 auto',
    },
    paperStyles: {
      width: '50%',
      height: '50%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        height: '100%',
      },
    },
    formStyles: {
      margin: '0 auto',
      width: '80%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        marginTop: 20,
      },
      [theme.breakpoints.down('xs')]: {
        width: '90%',
        height: '60%',
      },
    },
    inputStyles: {
      width: '100%',
    },
    buttonStyles: {
      width: '100%',
      height: 50,
      backgroundColor: 'orange',
      color: 'white',
    },
  })
);
