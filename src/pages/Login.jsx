import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/PersonSlice";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch(
          login({
            email: email,
            password: password,
            loggedIn: true,
          })
        );

        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        toast.error(<div>Log in failed. Try again</div>);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="login-container">
      <Card
        sx={{
          width: 500,
          height: 420,
          margin: "12.5% auto",
          boxShadowshadow: "2px",
        }}
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
            <Button
              variant="contained"
              onClick={onLogin}
              fullWidth
              sx={{
                backgroundColor: "#d3a625",
                "&:hover": { backgroundColor: "#eeba30" },
              }}
            >
              Log in
            </Button>
            <Tooltip title="As a Guest you can't upload an image">
              <p className="text-sm text-white text-center">
                <NavLink to="/">Continue as Guest</NavLink>
              </p>
            </Tooltip>
          </Box>
          <Divider variant="middle" />
          <p className="text-sm text-white text-center">
            No account yet? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </Box>
      </Card>
    </div>
  );
};

export default Login;
