import Header from '../components/Header';
import Carousel from '../components/Carousel';
import LogementMenu from '../components/LogementMenu';
import Footer from '../components/Footer';

function Logement() {
    return (
        <div>
            <main className="main-div">
                <Header />
                <Carousel />
                <LogementMenu />
            </main>
            <Footer />
        </div>
    )
}

export default Logement