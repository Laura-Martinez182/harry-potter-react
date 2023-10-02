import NavBar from "../components/navigation/NavBar";
import Button from '@mui/material/Button';
import { useNavigate, useParams} from "react-router";
import DetailDataContainer from "../components/detail/DetailDataContainer";
import React from "react";
import axiosInstance from "../config/axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { storage } from "../auth/firebase";
import { database } from "../auth/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectPerson } from "../redux/reducers/PersonSlice";
import { getDownloadURL, ref as refStorage,uploadBytes} from "firebase/storage";
import { getDatabase, ref as refDB, set as setDB, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const CharacterDetail = () =>{

    const [character,setCharacter] = React.useState({});
    const [imageUrl,setImageUrl] = React.useState("");

    let {id} = useParams()
    const screenName = "Character Detail"
    const user = useSelector(selectPerson);

    const navigate = useNavigate()
    const navigateToUrl = (url) =>{
        navigate(url)
    }

    const goBack = () => {
        navigateToUrl("/characters")
    }
    
    const getCharacter = async () => {
        let character = {}
        await axiosInstance.get("/characters/"+id).then((response) => {  
            character = response.data['data']                  
            
            const attributes = {...character.attributes}

            for(const att in character.attributes){
                character[att] = attributes[att]
            }

            delete character.attributes

            setCharacter(character)                                 
        });

        await getCharacterImageUrl(character)
    }

    React.useEffect(() => {
      getCharacter()
      
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
   
        if(!user){
            toast.error(<div>Not authorized: <br/> Log In to upload an image for the character!</div>)
            return;
        }
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
                toast.error(<div>{error.message}</div>)
            });
        })
        .catch((error) => {
            toast.error(<div>{error.message}</div>)
        });
    }

    const saveUrlToFirebase = (url) => {   
        const urlObj = {"url":url}

        console.log(urlObj)

        setDB(refDB(database, 'characters/images/' + id), urlObj).then( () => {
            // Success.
         } ).catch( (error) => {
           toast.error(<div>{error.message}</div>)
         } );
    }

    const getCharacterImageUrl = async (characterF) => {

        const database = getDatabase();
        const ref = refDB(database, 'characters/images/' + id);

        onValue(ref, (snapshot) => {
            const data = snapshot.val();
            if( !!data ) {
                setImageUrl(data.url)
            } else {                
                if(characterF.image != null){
                    setImageUrl(characterF.image)
                }
                else{
                    toast.warning(<div>No image found</div>)
                }
            }  
          }, {
            onlyOnce: true
          });
    }

    return(   
        <div className="MainContainer">      
            <ToastContainer /> 
            <NavBar pageName = {screenName}/>
            <div className="DetailPageContainer">               
                <div className="BackButtonContainer">
                    <Button onClick={goBack} component="label" variant="contained" startIcon={<ArrowBackIcon />} sx={{margin:"1%", backgroundColor: "#d3a625", '&:hover': {backgroundColor: "#eeba30"}}}>
                        Back to characters
                    </Button>
                </div>
                <div className="CharacterImageContainer">
                    <img src={imageUrl} alt="CharacterImage" width="200px" height="200px"/>                                        
                    <Button disabled={user?false:true} component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{marginTop:"3%", backgroundColor: "#ae0001", '&:hover': {backgroundColor: "#740001"}}}>
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