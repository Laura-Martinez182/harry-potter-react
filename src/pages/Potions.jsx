import React from "react";
import PageContentContainer from "../components/PageContentContainer"
import NavBar from "../components/navigation/NavBar"
import axiosInstance from "../config/axios";
import { useNavigate } from "react-router-dom";

const Potions = () => {
  const [getRows, setRows] = React.useState([
    { id: "test", name: "This a name" },
  ]);
  const screenName = "Potions";
  const navigate = useNavigate();
  const navigateToUrl = (url) => {
    navigate(url);
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 0.7, headerAlign: 'center' },
    { field: "characteristics", headerName: "Characteristics", flex: 0.7, headerAlign: 'center' },
    { field: "difficulty", headerName: "Difficulty", flex: 0.7, headerAlign: 'center'},
    { field: "effect", headerName: "Effect", flex: 0.7, headerAlign: 'center'},
    { field: "ingredients", headerName: "Ingredients", flex: 0.7, headerAlign: 'center'},
  ];


  const getPotions = async () => {
    await axiosInstance.get("/potions").then((response) => {
      var potions = response.data["data"];
      potions = potions.map((potions) => {
        const attributes = { ...potions.attributes };

        for (const att in potions.attributes) {
            potions[att] = attributes[att];
        }

        delete potions.attributes;
        return potions;
      });

      setRows(potions);
    });
  };

  React.useEffect(() => {
    getPotions()
    console.log("Loaded potions");
  });

  const showDetail = (params) => {
    const potionId = params.id;
    navigateToUrl("/potions/" + potionId);
  };

  return (
    <div className="MainContainer">
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

export default Potions;
