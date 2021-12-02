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
import DisplayCom from "./Components/BookSearch/DisplayCom.jsx";
import BookCard from "./Components/BookSearch/BookCard.jsx";
import UploadBookForm from "./Components/Forms/UploadBook/UploadBookForm.jsx";
import Newsfeed from './Components/Newsfeed/MainNewsFeed/Newsfeed'
import store from './Store/store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Wishlist from "./Components/SharedComponents/wishlist/Wishlist.jsx";
import Cart from "./Components/Cart/Cart.jsx";

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
          <Route path="/register" component={Signup} />
          <Route path="/getbooks" component={GetBooks} />
          <Route path="/card" component={BookCard} />
          <Route path="/uploadBook" component={UploadBookForm} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/cart" component={Cart} />
          <Router path="/notfound" component={NotFound} />
          <Route path="/:details_id" component={DisplayCom} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
