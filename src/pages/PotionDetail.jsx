import { useParams } from "react-router";
import NavBar from "../components/navigation/NavBar";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import DetailDataContainer from "../components/detail/DetailDataContainer";
import React from "react";
import axiosInstance from "../config/axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PotionDetail = () =>{

    let {id} = useParams()
    const screenName = "Potion Detail"

    const navigate = useNavigate()
    const navigateToUrl = (url) =>{
        navigate(url)
    }

    const goBack = () => {
        navigateToUrl("/potions")
    }

    const [potion,setPotion] = React.useState({})
    
    const getPotion = async () => {

        await axiosInstance.get("/potions/"+id).then((response) => {  
            var potion = response.data['data']                  
            
            const attributes = {...potion.attributes}

            for(const att in potion.attributes){
                potion[att] = attributes[att]
            }

            delete potion.attributes

            setPotion(potion)                                 
        });

    }

    React.useEffect(() => {
      getPotion()
      console.log("loaded potion")
    },[])

    return(   
        <div className="MainContainer">       
            <NavBar pageName = {screenName}/>
            <div className="DetailPageContainer">                
                <div className="BackButtonContainer">
                    <Button onClick={goBack} component="label" variant="contained" startIcon={<ArrowBackIcon />} sx={{margin:"1%", backgroundColor: "#d3a625", '&:hover': {backgroundColor: "#eeba30"} }}>
                        Back to potions
                    </Button>
                </div>
                <DetailDataContainer object={potion}></DetailDataContainer>
            </div>  
        </div>
    )
}

export default PotionDetail;