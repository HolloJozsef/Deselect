import {createStore, combineReducers, compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { studentRegisterReducer,studentListReducer} from './reducers/studentReducer';

const reducer= combineReducers({

    studentRegister:studentRegisterReducer,
    studentList:studentListReducer
})

const composeEnhancer=compose;
const store=createStore(reducer, composeEnhancer(applyMiddleware (thunk)));

export default store;