import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Footer from './Components/SharedComponents/Footer.jsx'
import NavBar from './Components/SharedComponents/NavBar.jsx'
import Home from './Components/home/Home';
import Signin from './Components/Forms/Signin/Signin.jsx'
import Signup from './Components/Forms/signup/Signup.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Signin}/>
        <Route path='/register' component={Signup}/>
      </Switch>
      <Footer />
     </Router>
  );
}

export default App;
