import Authors from './Authors'
import Header from './Header'
import Seller from './Seller'
import StoreShop from './StoreShop'

export const Home = () => {
    return (
        <>
            <Header/>
            <Seller/>
            <StoreShop/>
            <Authors/>
        </>
    )
}
export default Home