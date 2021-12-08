import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Components/SharedComponents/Footer.jsx";
import NavBar from "./Components/SharedComponents/NavBar.jsx";
import Home from "./Components/home/Home";
import Signin from "./Components/Forms/Signin/Signin.jsx";
import Signup from "./Components/Forms/signup/Signup.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import NotFound from "./Components/SharedComponents/PageNotFound/NotFound.jsx";
import GetBooks from "./Components/BookSearch/GetBooks.jsx";
import DisplayBooks from "./Components/BookSearch/DisplayBooks.jsx";
import BookCard from "./Components/BookSearch/BookCard.jsx";
import PaymentMethods from "./Components/PaymentForms/PaymentMethods.jsx";
import UploadBookForm from "./Components/Forms/UploadBook/UploadBookForm.jsx";
import Newsfeed from './Components/Newsfeed/MainNewsFeed/Newsfeed'
import store from './Store/store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Wishlist from "./Components/SharedComponents/wishlist/Wishlist.jsx";
import Cart from "./Components/Cart/Cart.jsx";
// import Newsfeed from "./Components/Newsfeed/MainNewsFeed/Newsfeed";
import Rate from "./Components/PaymentForms/Rate.jsx";
import Thanks from "./Components/PaymentForms/Thanks.jsx";
import QuoteMachine from "./Services/QuoteMachine.jsx";
import User_profile from "./Components/user_profile/User_profile.jsx";
import New_post_item from "./Components/SharedComponents/posts/new_post_item/New_post_item.jsx";
import UserSettings from "./Components/SharedComponents/user_setings/UserSettings.jsx";
import Publisher from "./Components/publishers/Publisher.jsx";
// import getData, { BookAction } from './Store/bookProfile/BookAction'
// import BookProfile from './Components/bookProfile/BookProfile'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newsfeed" component={Newsfeed} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/login" component={Signin} />
          {/* <Route path="/slider" component={SliderBook} /> */}
          <Route path="/register" component={Signup} />
          <Route path="/getbooks" component={GetBooks} />
          <Route path="/card" component={BookCard} />
          <Route path="/uploadBook" component={UploadBookForm} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/cart" component={Cart} />
          <Route path="/notfound" component={NotFound} />
          {/* <Route path="/contactUs" component={ContactsUs}/> */}
          {/* <Route path="/bookstore" component={BasicTabs} exact /> */}
          <Route path="/publishers" component={Publisher} />
          <Route path="/:details_id" component={DisplayBooks} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
