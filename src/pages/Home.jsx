import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={8}></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
