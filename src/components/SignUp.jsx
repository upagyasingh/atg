import * as React from "react";
import g1 from "../assets/g1.webp"
import f1 from "../assets/f1.png"
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import s1 from "../assets/s1.png"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "100%", // Custom width
    maxWidth: "1000px", // Optional maximum width
  },
}));

export default function SignUp() {

    const providers = [
        { id: 'google', name: 'Sign up with Google',img:g1 },
        { id: 'facebook', name: 'Sign up with Facebook', img:f1},
      ];
      
      

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <p onClick={handleClickOpen}  className="mt-3">Create Account</p>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          className="text-green-700 flex justify-center 700:hidden"
          style={{ backgroundColor: "#EFFFF4", fontSize: "17px" }}
        >
          <b>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </b>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="grid grid-cols-2 ">
            <div className="700:col-span-2">
              <h3  className="mb-4">Create Account</h3>
              <div className="grid grid-cols-2">
                <TextField
                  id="filled-basic4567"
                  label="First Name"
                  variant="filled" 
                  className="m-1"
                />
                <TextField
                  id="filled-basic3456"
                  label="Last Name"
                  variant="filled" 
                  className="m-1"
                />
                <TextField
                  id="filled-basic12345"
                  label="Email"
                  variant="filled"
                  className="col-span-2 m-1"
                />
               <div className="col-span-2">
               <FormControl
                  
                  variant="filled"
                  className="w-[98.5%] m-1"

                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
               </div>

                <TextField
                  id="filled-basic123"
                  label="Confirm Password"
                  variant="filled"
                  className="col-span-2 m-1"
                />
               <div className="700:flex justify-between col-span-2 items-center px-4 ">
               <div className="col-span-2 700:col-span-1">
               <button className="w-full bg-blue-700 text-white rounded-full h-12 mt-3 700:p-3 ">Create Account</button>
               </div>
               <div className=" hidden 700:flex"><a href="#" className="text-slate-500 hover:text-blue-700">Or, Sign In</a></div>
               </div>

               <div className="col-span-2 px-3 mt-3">
                {providers.map((com,ind)=><div key={ind}>
                    <div className="w-full h-14 flex  items-center justify-center gap-4 border-2 mt-2">
                      <img src={com.img} className="h-[30px]"/>
                      <p className="mt-2">{com.name}</p>
                    </div>
                </div>)}
               </div>
              </div>
            </div>
            <div className="700:hidden">
                <h6 className="text-slate-600 flex justify-end">already have a account?&nbsp; <b className="text-blue-700 cursor-pointer"> Sign In</b></h6>
                <div className=" mt-4 ml-5">
                <img src={s1} className="h-[450px]" />
                <p className="text-slate-500 text-sm">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                </div>
            </div>
            <p className="text-slate-500 text-sm hidden 700:flex w-full  col-span-2 justify-center mt-2">By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
