import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import makeStyles from "./snackbarStyles";


const CustomizedSnackbar = ({open,setOpen}) => {
  const classes = makeStyles();
  const handleClose =(event,reason)=>{
      if(reason==='clickaway') return;
      setOpen(false);
  }
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled" >
            Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
