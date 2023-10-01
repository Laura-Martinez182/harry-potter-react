import React from "react";
import PageContentContainer from "../components/PageContentContainer"
import NavBar from "../components/navigation/NavBar"
import axiosInstance from "../config/axios";
import { useNavigate } from "react-router-dom";

const Movies = () =>{

    const [getRows,setRows] = React.useState([{id:"whaatasdtasd",title:"This a title"}])
    const screenName = "Movies"
    const navigate = useNavigate()
    const navigateToUrl = (url) => {navigate(url);}

    const columns = [
        { field: 'title', headerName: 'Title', flex:0.7, headerAlign: 'center'},          
        { field: 'release_date',headerName:'Release Date', flex:0.7, headerAlign: 'center'},       
        { field: 'running_time',headerName:'Running Time', flex:0.7, headerAlign: 'center'},
        { field: 'budget',headerName:'Budget', flex:0.7, headerAlign: 'center'},  
        { field: 'box_office',headerName:'Box Office', flex:0.7, headerAlign: 'center'},
        { field: 'directors',headerName:'Directors', flex:0.7, headerAlign: 'center'}, 
        { field: 'distributors',headerName:'Distributors', flex:0.7, headerAlign: 'center'},
      ];

    const getMovies = async () =>{
        await axiosInstance.get("/movies").then((response) => {  
            var movies = response.data['data']                  
            
            //Each movie object has id and attribute with the information
            //This part extracts the information from the attributes and
            //puts it at the same level as the id
            movies = movies.map((movie) => {
                const attributes = {...movie.attributes}

                for(const att in movie.attributes){
                    movie[att] = attributes[att]
                }

                delete movie.attributes
                return movie
            });            

            setRows(movies)                       
        });
    }

    React.useEffect(() =>{
        //getMovies()        
        console.log("Loaded movies")
    });

    const showDetail = (params) => {
        const movieId = params.id
        navigateToUrl('/movies/' + movieId)
    }

    return(
        <div className="MainContainer">
            <NavBar pageName = {screenName}/>
            <PageContentContainer columns={columns} rows={getRows} pageName={screenName + " list"} onRowClicked={showDetail}></PageContentContainer>
        </div>        
    )
}

export default Movies