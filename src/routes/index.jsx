import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Characters from "../pages/Characters";
import Potions from "../pages/Potions";
import SignUp from "../pages/SignUp";


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<SignUp/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/potions" element={<Potions/>}/>

        </Routes>
    </BrowserRouter>
)
    

export default Router