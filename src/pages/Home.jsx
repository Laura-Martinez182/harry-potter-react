import { Grid } from "@mui/material";
import CardComponent from "../components/Card";
import NavBar from "../components/navigation/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Grid container columnSpacing={6}>
        <Grid item>
          <CardComponent
            img="/src/assets/test.jpg"
            title="Characters"
            content="Testing"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img="/src/assets/test.jpg"
            title="Movies"
            content="Testing"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img="/src/assets/test.jpg"
            title="Potions"
            content="Testing"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
