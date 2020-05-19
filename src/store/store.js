import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import countriesReducer from "./reducers/countriesReducer";
import {rootSaga} from "./sagas/countriesSaga";

const reducers = combineReducers({
    countries: countriesReducer,

});

const sagaMiddleware = createSagaMiddleware()

let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

window.store =store;

export default store;