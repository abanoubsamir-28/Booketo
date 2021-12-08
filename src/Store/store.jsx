import { createStore } from "redux";

import rootReducer from "./rootReducer";

// Please setup the redux devtools to track the redux store from the extesion and this code added just to link store of the app with the chrome extension that called 'redux devtools'
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, composeEnhancers);
export default store;
