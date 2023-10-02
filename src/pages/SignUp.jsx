import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success(<div> Account created </div>);
      }, navigate("/login"))
      .catch((error) => {
        toast.error(<div>Error creating the account. Try again.</div>);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="sign-container">
      <Card
        sx={{ width: 500, height: 400, boxShadow: 2, margin: "12.5% auto" }}
      >
        <ToastContainer />
        <Box
          component="form"
          borderRadius="lg"
          pt={5}
          pb={5}
          px={5}
          textAlign="center"
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" component="div">
            Create an account
          </Typography>
          <br />
          <Box mb={2}>
            <TextField
              id="outlined-basic"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="outlined-password-input"
              label="Password"
              helperText="Password should be at least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              fullWidth
            />
          </Box>
          <Box mt={4} mb={1}>
            <Button variant="contained" onClick={onSubmit} fullWidth sx={{backgroundColor: "#ae0001", '&:hover': {backgroundColor: "#740001"}}}>
              Sign up
            </Button>
          </Box>
          <Divider variant="middle" />
          <p className="text-sm text-white text-center">
            Already have an account? <NavLink to="/login">Log in</NavLink>
          </p>
        </Box>
      </Card>
    </div>
  );
};

export default SignUp;
