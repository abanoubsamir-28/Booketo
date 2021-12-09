// Please setup the redux devtools to track the redux store from the extesion and this code added just to link store of the app with the chrome extension that called 'redux devtools'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//const store = createStore(rootReducer, composeEnhancers);


const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
