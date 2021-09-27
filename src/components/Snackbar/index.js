import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from '@mui/material'
// import MuiAlert from "@material-ui/lab/Alert";
import { snackbarClear } from '../../toolkitRedux/snackbarSlice'
import { useEffect } from 'react'

export const SnackbarAll = () => {

  const dispatch = useDispatch()

  const {
    successOpen,
    successMessage,
    errorOpen,
    errorMessage,
  } = useSelector((state) => state.snackbar);

  function handleClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackbarClear());
  }

  // if (errorOpen || successOpen) {
  //   console.log('start')
  //   setTimeout(() => {
  //     console.log('ok')
  //     dispatch(snackbarClear())
  //   }, 3000)
  // }

  // useEffect(() => {
  //   console.log('start time')
  //   setTimeout(() => {
  //     console.log('ok')
  //     dispatch(snackbarClear())
  //   }, 3000)
  // }, [])

  // function Alert(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }snackbarClear
  if (errorOpen) {
    return (
      <Snackbar
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "left",
        // }}
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        aria-describedby="client-snackbar"
      >
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    );
  } else if (successOpen)  {
    return (
      <Snackbar
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        aria-describedby="client-snackbar"
      >
        <Alert onClose={handleClose} severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    );
  }
  else return null
}
export default SnackbarAll
