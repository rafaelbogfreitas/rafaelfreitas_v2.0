import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { clearAlert } from '../../store/Alert.store';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomAlert = (): JSX.Element => {
  const alertState = useSelector((state: RootState) => state.alert);
  const { message, showAlert, timeout, type } = alertState;
  const [open, setOpen] = React.useState(showAlert);

  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(showAlert);
  }, [showAlert]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setTimeout(() => {
      dispatch(clearAlert());
    }, 100);
  };

  return (
    <Snackbar open={open} autoHideDuration={timeout} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
