import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import {middleware} from '../navigator/Navigator';

const middlewares = [
    middleware,
    thunk,
];
/**
 * 创建store
 */
export default createStore(reducer, applyMiddleware(...middlewares));