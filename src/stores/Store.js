import { createStore, combineReducers } from "redux";
import Moviereducer from "../reducers/Moviereducer"
import Ratingreducer from "../reducers/RatingFilterReducer"

const store = createStore(combineReducers({Moviereducer, Ratingreducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store