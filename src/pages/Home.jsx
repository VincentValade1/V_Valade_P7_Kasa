import Banner from "../components/Banner"
import LogementsList from "../components/LogementsList"
import homeBanner from "../assets/home-img.png"
 
function Home() {
    return (
        <main>
            <Banner className='home'>
                <img src={homeBanner} alt='ocean contre falaise' />
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <LogementsList />
        </main>
    )
}

export default Home