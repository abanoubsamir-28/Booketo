import Authors from './Authors'
import Header from './Header'
import Seller from './Seller'
import FeaturesLogo from './FeaturesLogo'
import SliderBook from './../SharedComponents/slider/SliderBook'
export const Home = () => {
    return (
        <div className="landing" >
            <Header/>
            <Seller/>
            <SliderBook/>
            <FeaturesLogo/>
            <Authors/>
        </div>
    )
}
export default Home