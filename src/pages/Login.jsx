import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography
} from "@mui/material";

import { NavLink } from "react-router-dom";

const handleLogin = () => {
  console.log("test");
};

const Login = () => {
  return (
    <Card sx={{ width: 500, height: 400, boxShadow:2, margin:"12.5% auto"}}>
      <Box
        component="form"
        borderRadius="lg"
        coloredShadow="info"
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
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth
          />
        </Box>
        <Box mt={4} mb={1}>
          <Button variant="contained" onClick={handleLogin} fullWidth>
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
