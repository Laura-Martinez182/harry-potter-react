import { Grid } from "@mui/material";
import NavBar from "../components/navigation/NavBar";

const Home = () => {
  return (
    <>  
    <NavBar/>  
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={8}></Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default Home;
