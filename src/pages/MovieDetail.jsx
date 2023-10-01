import { useParams } from "react-router";
import NavBar from "../components/navigation/NavBar";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";

const MovieDetail = () =>{

    let {id} = useParams()
    const screenName = "Movie Detail"

    const navigate = useNavigate()
    const navigateToUrl = (url) =>{
        navigate(url)
    }

    const goBack = () => {
        navigateToUrl("/movies")
    }

    return(
        <div className="MainContainer">            
            <NavBar pageName = {screenName}/>
            <h2>Movie ID = {id}</h2>
            <Button variant="contained" color="primary" onClick={goBack}>
                Go Back
            </Button>
        </div>
    )
}

export default MovieDetail;