import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Characters from "../pages/Characters";
import Potions from "../pages/Potions";
import SignUp from "../pages/SignUp";
import MovieDetail from "../pages/MovieDetail";
import PotionDetail from "../pages/PotionDetail";
import CharacterDetail from "../pages/CharacterDetail"


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<Home/>}/>
            <Route path="/characters" element={<Characters/>}/>            
            <Route path="/characters/:id" element={<CharacterDetail/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:id" element={<MovieDetail/>}/>
            <Route path="/potions" element={<Potions/>}/>
            <Route exact path="/potions/:id" element={<PotionDetail/>}/>
        </Routes>
    </BrowserRouter>
)    

export default Router