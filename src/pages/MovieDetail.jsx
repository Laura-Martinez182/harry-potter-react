import { useParams } from "react-router";
import NavBar from "../components/navigation/NavBar";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import DetailDataContainer from "../components/detail/DetailDataContainer";
import React from "react";
import axiosInstance from "../config/axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

    const [movie,setMovie] = React.useState({})
    
    const getMovie = async () => {

        await axiosInstance.get("/movies/"+id).then((response) => {  
            var movie = response.data['data']                  
            
            const attributes = {...movie.attributes}

            for(const att in movie.attributes){
                movie[att] = attributes[att]
            }

            delete movie.attributes

            setMovie(movie)                                 
        });

    }

    React.useEffect(() => {
      getMovie()
      console.log("loaded movie")
    },[])

    return(   
        <div className="MainContainer">       
            <NavBar pageName = {screenName}/>
            <div className="DetailPageContainer">                
                <div className="BackButtonContainer">
                    <Button onClick={goBack} component="label" variant="contained" startIcon={<ArrowBackIcon />} sx={{margin:"1%", backgroundColor: "#d3a625", '&:hover': {backgroundColor: "#eeba30"}}}>
                        Back to movies
                    </Button>
                </div>
                <DetailDataContainer object={movie}></DetailDataContainer>
            </div>  
        </div>
    )
}

export default MovieDetail;