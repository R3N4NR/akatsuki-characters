
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Error } from "../error/Error500";

const RoutesApp = () => {

    return (
        <BrowserRouter>
        
        <Routes>
        
            <Route path='/' element={<Home/>}/>
            <Route path='/error' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp