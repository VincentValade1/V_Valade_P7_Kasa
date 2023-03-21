import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Apropos from "../pages/Apropos";
import Error from "../pages/Error";
import Header from "../components/Header";
import Footer from "../components/Footer";

// dans notre fichier Router.jsx on crée notre Router avec "react-router-dom", 
// qui inclus toutes les routes URL de notre app avec les composants associés appelés.
// Les composants Header et Footer seront communs à toutes les routes donc ils sont importés 
// directement dans notre Router.
function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* route de la page d'accueil avec appel du composant Home */}
                <Route exact path='/' element={<Home />} />
                {/* route de la page logement avec l'id du logement choisi dans l'url avec appel du composant Logement */}
                <Route exact path='/logement/:id' element={<Logement />} />
                {/* route de la page a-propos avec appel du composant Apropos */}
                <Route exact path='/a-propos' element={<Apropos />} />
                {/* route appelant le composant Error pour les path inconnus par notre router */}
                <Route exact path='*' element={<Error />} />
                {/* route de la page Error404 appelant le composant Error pour les ID du path inconnu par notre DataBase */}
                <Route exact path='/pageError404'element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router