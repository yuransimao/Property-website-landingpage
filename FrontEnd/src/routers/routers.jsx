import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Profile,AddProperty } from "../pages";
import { Layout, Footer } from "../components";
const Router = () =>{
    return(
        <BrowserRouter>
        <Layout/>
        <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="/profile/me"  element={<Profile/>}/>
            <Route path="/user/property" element={<AddProperty/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;