'use client'
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "@/store/store";
import { addError } from "@/features/user/user.slice";

export default function SnackbarComponent({
  message,
}: {
  message: any;
}) {
  const [open,setOpen]=React.useState(true);
  const dispatch=useAppDispatch();
  const clearErrorMessage=()=>{
    dispatch(addError(""))
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    clearErrorMessage()
    setOpen(false);
  };
  React.useEffect(()=>{
    const clearSnackbar=setTimeout(()=>{
      setOpen(false)
      clearErrorMessage()
    },4000)

    return ()=>{
      clearTimeout(clearSnackbar);
    }
  },[open])
  const action = (
    <React.Fragment>  
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
}
