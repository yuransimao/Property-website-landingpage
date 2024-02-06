import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Header, Footer } from "../components";
const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;