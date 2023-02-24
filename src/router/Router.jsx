import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Apropos from "../pages/Apropos"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/logement/:id' element={<Logement />} />
                <Route exact path='/a-propos' element={<Apropos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router