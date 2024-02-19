import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Profile } from "../pages";
import { Layout, Footer } from "../components";
const Router = () =>{
    return(
        <BrowserRouter>
        
        <Routes>
            <Route index path="/" element={<Layout><Home/></Layout>}/>
            <Route path="/profile/me"  element={<Profile/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;