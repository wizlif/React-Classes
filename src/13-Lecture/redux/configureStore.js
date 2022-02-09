import {applyMiddleware, combineReducers, createStore} from 'redux';
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import createSagaMiddleware from "redux-saga";
import {watcherSaga} from "./sagas/rootSaga";

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)
export default store