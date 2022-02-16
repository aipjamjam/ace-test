import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'

import userReducer from './../store/user/reducer'

const rootReducer = {
    userReducer,
}

const reducers = combineReducers(rootReducer)

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store