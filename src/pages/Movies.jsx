import React from "react";
import PageContentContainer from "../components/PageContentContainer"
import NavBar from "../components/navigation/NavBar"
import axiosInstance from "../config/axios";

const Movies = () =>{

    const [getRows,setRows] = React.useState([])
    const screenName = "Movies"

    const columns = [
        { field: 'title', headerName: 'Title', flex:1},          
        { field: 'release_date',headerName:'Release Date', flex:0.5},       
        { field: 'running_time',headerName:'Running Time', flex:0.5},
        { field: 'budget',headerName:'Budget', flex:0.8},  
        { field: 'box_office',headerName:'Box Office', flex:0.5},
        { field: 'directors',headerName:'Directors', flex:0.5}, 
        { field: 'distributors',headerName:'Distributors', flex:1},
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
        getMovies()
    });

    return(
        <div className="MainContainer">
            <NavBar pageName = {screenName}/>
            <PageContentContainer columns={columns} rows={getRows} pageName={screenName + " list"}></PageContentContainer>
        </div>        
    )
}

export default Movies