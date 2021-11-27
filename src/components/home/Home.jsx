import Authors from './Authors'
import Header from './Header'
import Seller from './Seller'
import StoreShop from './StoreShop'
import PaymentMethods from  '../PaymentForms/PaymentMethods.jsx'
import Payment from '../PaymentForms/Payment'
import Rate from '../PaymentForms/Rate'
export const Home = () => {
    return (
        <>
           <Payment/>
           {/* <PaymentMethods/> */}
           {/* <Rate/> */}
            <Header/>
            <Seller/>
            <StoreShop/>
            <Authors/>
        </>
    )
}
export default Home