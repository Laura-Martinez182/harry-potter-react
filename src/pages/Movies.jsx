import PageContentContainer from "../components/PageContentContainer"
import NavBar from "../components/navigation/NavBar"

const Movies = () =>{

    const screenName = "Movies"

    const columns = [
        { field: 'id', headerName: 'ID', flex:0.2},
        { field: 'type', headerName: 'Type',flex:1},
        { field: 'slug', headerName: 'Name', flex:1},
        { field: 'rating',headerName:'Rating', flex:1}
      ];

    const rows = [
        { id: 1, type: 'movie', slug: 'Harry Potter and the p...', rating: 'PG' },
        { id: 2, type: 'movie', slug: 'Harry Potter and ...', rating: 'PG' },
        { id: 3, type: 'movie', slug: 'Harry Potter and ...', rating: 'PG' },
        { id: 4, type: 'movie', slug: 'Harry Potter and ...', rating: 'PG' }
      ];
    
    return(
        <div className="MainContainer">
            <NavBar pageName = {screenName}/>
            <PageContentContainer columns={columns} rows={rows} pageName={screenName + " list"}></PageContentContainer>
        </div>        
    )
}

export default Movies