import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
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
});
