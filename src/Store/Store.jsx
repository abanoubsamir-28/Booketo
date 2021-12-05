import { createStore } from 'redux'
// import thunk from 'redux-thunk'
// import bookReducer from './bookProfile/BookReducer'
import rootReducer from './rootReducer';

const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer , composeEnhancers)
export default store