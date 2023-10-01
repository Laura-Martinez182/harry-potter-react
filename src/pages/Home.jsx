import { Grid } from "@mui/material";
import CardComponent from "../components/Card";
import NavBar from "../components/navigation/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Grid  container justifyContent="center" columnSpacing={6} marginTop={25} display="flex">
        <Grid item>
          <CardComponent
            img="/src/assets/test.jpg"
            title="Characters"
            content="Testing"
            to="/characters"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img="/src/assets/test.jpg"
            title="Movies"
            content="Testing"
            to="/movies"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img="/src/assets/test.jpg"
            title="Potions"
            content="Testing"
            to="/potions"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
