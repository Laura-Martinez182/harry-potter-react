import { useParams } from "react-router";
import NavBar from "../components/navigation/NavBar";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import DetailDataContainer from "../components/detail/DetailDataContainer";
import React from "react";
import axiosInstance from "../config/axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { storage } from "../auth/firebase";
import { database } from "../auth/firebase";
import { toast } from 'react-toastify';

import {
    getDownloadURL,
    ref as refStorage,
    uploadBytes,
  } from "firebase/storage";

import { getDatabase, ref as refDB, set as setDB, onValue } from "firebase/database";

const CharacterDetail = () =>{

    const [character,setCharacter] = React.useState({});
    const [imageUrl,setImageUrl] = React.useState("");

    let {id} = useParams()
    const screenName = "Character Detail"

    const navigate = useNavigate()
    const navigateToUrl = (url) =>{
        navigate(url)
    }

    const goBack = () => {
        navigateToUrl("/characters")
    }
    
    const getCharacter = async () => {

        await axiosInstance.get("/characters/"+id).then((response) => {  
            var character = response.data['data']                  
            
            const attributes = {...character.attributes}

            for(const att in character.attributes){
                character[att] = attributes[att]
            }

            delete character.attributes

            setCharacter(character)                                 
        });

    }

    React.useEffect(() => {
      getCharacter()
      getCharacterImageUrl()
      console.log("loaded character")
    },[])

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    const handleImageUpload = (e) =>{
        const file = e.target.files[0];
        uploadToFirebase(file)
    }
    
    const uploadToFirebase = (file) => {
        const imageRef = refStorage(storage,`images/${file.name}`);
                
        uploadBytes(imageRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              setImageUrl(url);
              saveUrlToFirebase(url);
            })
            .catch((error) => {
                toast.error(error.message)
            });
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    const saveUrlToFirebase = (url) => {   
        const urlObj = {"url":url}

        console.log(urlObj)

        setDB(refDB(database, 'characters/images/' + id), urlObj).then( () => {
            // Success.
         } ).catch( (error) => {
           console.log(error);
         } );
    }

    const getCharacterImageUrl = async () => {

        const database = getDatabase();
        const ref = refDB(database, 'characters/images/' + id);

        onValue(ref, (snapshot) => {
            const data = snapshot.val();
            if( !!data ) {
              setImageUrl(data.url)
            } else {
              console.log('Data not found');
            }  
          }, {
            onlyOnce: true
          });
    }

    return(   
        <div className="MainContainer">       
            <NavBar pageName = {screenName}/>
            <div className="DetailPageContainer">               
                <div className="BackButtonContainer">
                    <Button onClick={goBack} component="label" variant="contained" startIcon={<ArrowBackIcon />} sx={{margin:"1%"}}>
                        Back to characters
                    </Button>
                </div>
                <div className="CharacterImageContainer">
                    <img src={imageUrl} alt="CharacterImage" width="200px" height="200px"/>                                        
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{marginLeft:"1%"}}>
                        Upload file
                        <VisuallyHiddenInput type="file" accept="image/*" onChange={handleImageUpload}/>
                    </Button>
                </div> 
                <DetailDataContainer object={character}></DetailDataContainer>
            </div>  
        </div>
    )
}

export default CharacterDetail;