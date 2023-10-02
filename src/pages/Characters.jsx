import React from "react";
import PageContentContainer from "../components/PageContentContainer";
import NavBar from "../components/navigation/NavBar";
import axiosInstance from "../config/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Characters = () => {
  const [getRows, setRows] = React.useState([{ id: "", title: "" }]);
  const screenName = "Characters";
  const navigate = useNavigate();
  const navigateToUrl = (url) => {
    navigate(url);
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 0.7, headerAlign: "center" },
    { field: "born", headerName: "Born", flex: 0.7, headerAlign: "center" },
    { field: "died", headerName: "Died", flex: 0.7, headerAlign: "center" },
    { field: "height", headerName: "Height", flex: 0.7, headerAlign: "center" },
    { field: "house", headerName: "House", flex: 0.7, headerAlign: "center" },
    { field: "jobs", headerName: "Jobs", flex: 0.7, headerAlign: "center" },
    {
      field: "species",
      headerName: "Species",
      flex: 0.7,
      headerAlign: "center",
    },
    { field: "wand", headerName: "Wand", flex: 0.7, headerAlign: "center" },
    { field: "weight", headerName: "Weight", flex: 0.7, headerAlign: "center" },
  ];

  const getCharacters = async () => {
    await axiosInstance
      .get("/characters")
      .then((response) => {
        var characters = response.data["data"];

        //Each movie object has id and attribute with the information
        //This part extracts the information from the attributes and
        //puts it at the same level as the id
        characters = characters.map((character) => {
          const attributes = { ...character.attributes };

          for (const att in character.attributes) {
            character[att] = attributes[att];
          }

          delete character.attributes;
          return character;
        });
        setRows(characters);
      })
      .catch((error) => {
        toast.error(<div>Wait, there are to many request</div>);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  React.useEffect(() => {
    getCharacters();
    console.log("Loaded characters");
  }, []);

  //Params contains the information of the row
  const showDetail = (params) => {
    const movieId = params.id;
    navigateToUrl("/characters/" + movieId);
  };

  return (
    <div className="MainContainer">
      <ToastContainer />
      <NavBar pageName={screenName} />
      <PageContentContainer
        columns={columns}
        rows={getRows}
        pageName={screenName + " list"}
        onRowClicked={showDetail}
      ></PageContentContainer>
    </div>
  );
};

export default Characters;
