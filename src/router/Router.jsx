import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Apropos from "../pages/Apropos"
import Header from "../components/Header";
import Footer from "../components/Footer";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/logement/:id' element={<Logement />} />
                <Route exact path='/a-propos' element={<Apropos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router