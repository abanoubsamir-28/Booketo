import { createStore } from 'redux'
// import thunk from 'redux-thunk'
// import bookReducer from './bookProfile/BookReducer'
import rootReducer from './rootReducer'
const store = createStore(rootReducer)
export default store