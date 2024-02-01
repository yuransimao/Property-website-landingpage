import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Header } from "../components";
const Router = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;