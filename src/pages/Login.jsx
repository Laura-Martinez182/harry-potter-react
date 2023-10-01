import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        alert("Log in failed")
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       alert("Log in failed, " + error.message)
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  return (
    <Card sx={{ width: 500, height: 400, boxShadow: 2, margin: "12.5% auto" }}>
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
          Welcome
        </Typography>
        <br />
        <Box mb={2}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Box>
        <Box mt={4} mb={1}>
          <Button variant="contained" onClick={onLogin} fullWidth>
            Log in
          </Button>
        </Box>
        <Divider variant="middle" />
        <p className="text-sm text-white text-center">
          No account yet? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </Box>
    </Card>
  );
};

export default Login;
