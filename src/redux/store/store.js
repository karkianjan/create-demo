import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterslice'
import { helloSaga } from "../../saga/saga";
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "../slice/postslice";
import postSaga from "../../saga/postSaga";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(postSaga)
export default store