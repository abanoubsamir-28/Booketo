import Authors from './Authors'
import Header from './Header'
import Seller from './Seller'
import FeaturesLogo from './FeaturesLogo'
import SliderBook from './../SharedComponents/slider/SliderBook'
import LogInNavbar from '../SharedComponents/navbarHome/logInNavbar'

export const Home = () => {
    return (
        <div className="landing" >
            <LogInNavbar/>
            <Header/>
            <Seller/>
            <FeaturesLogo/>
            <SliderBook/>
            <Authors/>
        </div>
    )
}
export default Home