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
            img="https://wallpapercave.com/wp/wp9472724.jpg"
            title="Characters"
            content="This resource provides information about movies from the Harry Potter Universe."
            to="/characters"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img="https://miro.medium.com/v2/resize:fit:828/format:webp/0*-dkqWQNwu7hY2_3e.jpg"
            title="Movies"
            content="This resource provides information about movies from the Harry Potter Universe."
            to="/movies"
          />
        </Grid>
        <Grid item>
          <CardComponent
            img="https://img.freepik.com/premium-photo/potion-bottles-with-colored-liquids-them_674594-22564.jpg"
            title="Potions"
            content="This resource provides information about movies from the Harry Potter Universe."
            to="/potions"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
