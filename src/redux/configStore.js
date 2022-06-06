import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerQuestion from "./reducerQuestions";
import reducerConfirm from "./reducerConfirm";
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
    reducerQuestion,
    reducerConfirm
})

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;