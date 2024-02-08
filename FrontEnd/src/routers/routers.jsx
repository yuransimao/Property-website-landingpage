import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Layout, Footer } from "../components";
const Router = () =>{
    return(
        <BrowserRouter>
        <Layout/>
        <Routes>
            <Route index path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;