import Header from "../components/Header"
import Banner from "../components/Banner"
import LogementsList from "../components/LogementsList"
import Footer from "../components/Footer"
import homeBanner from "../assets/home-img.png"
import '../styles/Home.css'
 
function Home() {
    return (
        <div>
            <main className="home-main-div">
                <Header />
                <Banner className='home'>
                    <img src={homeBanner} alt='ocean contre falaise' />
                    <h1>Chez vous, partout et ailleurs</h1>
                </Banner>
                <LogementsList />
            </main>
            <Footer />
        </div>
    )
}

export default Home