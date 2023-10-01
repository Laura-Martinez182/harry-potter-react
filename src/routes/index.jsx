import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Characters from "../pages/Characters";
import Potions from "../pages/Potions";
import SignUp from "../pages/SignUp";
import MovieDetail from "../pages/MovieDetail";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={<Home/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route exact path="/movies/:id" element={<MovieDetail/>}/>
            <Route path="/potions" element={<Potions/>}/>
        </Routes>
    </BrowserRouter>
)    

export default Router