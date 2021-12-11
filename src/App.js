import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Components/SharedComponents/Footer.jsx";
import Home from "./Components/home/Home";
import Signin from "./Components/Forms/Signin/Signin.jsx";
import Signup from "./Components/Forms/signup/Signup.jsx";
import GetBooks from "./Components/BookSearch/GetBooks.jsx";
import DisplayBooks from "./Components/BookSearch/DisplayBooks.jsx";
import BookCard from "./Components/BookSearch/BookCard.jsx";
import PaymentMethods from "./Components/PaymentForms/PaymentMethods.jsx";
import UploadBookForm from "./Components/Forms/UploadBook/UploadBookForm.jsx";
import Newsfeed from "./Components/Newsfeed/MainNewsFeed/Newsfeed.jsx";
import Wishlist from "./Components/SharedComponents/wishlist/Wishlist.jsx";
import ContactsUs from "./Components/Forms/contacUs/ContactsUs.jsx";
import BasicTabs from "./Components/BookStore/BookStore.jsx";
import store from "./Store/store.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "./Components/Cart/Cart.jsx";
import Rate from "./Components/PaymentForms/Rate.jsx";
import Thanks from "./Components/PaymentForms/Thanks.jsx";
import User_profile from "./Components/user_profile/User_profile.jsx";
import UserSettings from "./Components/SharedComponents/user_setings/UserSettings.jsx";
import Publisher from "./Components/publishers/Publisher.jsx";
import "./App.css";
import Payment from "./Components/PaymentForms/Payment.jsx";
import StoreBooks from "./Components/BookStore/StoreBooks.jsx";
function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <NavBar /> */}
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newsfeed" component={Newsfeed} />
            <Route path="/userprofile" component={User_profile} />
            <Route path="/login" component={Signin} />
            <Route path="/settings" component={UserSettings} />
            <Route path="/register" component={Signup} />
            <Route path="/getbooks" component={GetBooks} />
            <Route path="/cart" component={Cart} />
            <Route path="/card" component={BookCard} />
            <Route path="/uploadBook" component={UploadBookForm} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/publishers" component={Publisher} />
            <Route path="/storebooks" component={StoreBooks} />
            <Route path="/payment" component={Payment} />
            <Route path="/paymentMethod" component={PaymentMethods} />
            <Route path="/rate" component={Rate} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/bookstore" component={BasicTabs} exact />
            <Route path="/contactUs" component={ContactsUs} />
            <Route path="/:details_id" component={DisplayBooks} />
          </Switch>
        </div>
        {/* <Route component={NotFound} /> */}
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
