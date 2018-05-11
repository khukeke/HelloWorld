import { createStore, compose, applyMiddleware } from 'redux';
// import {customThunkMiddleware, customLogMiddleware} from './customMiddleware'
import {customThunkMiddleware} from './customMiddleware'
import reducer from './reducer';

const initialState = {
  daily: undefined,
  locationId: 0,
  calenderId: 0
}

const middleware = [ customThunkMiddleware ]

const storeEnhancer = compose(applyMiddleware(...middleware))

export default createStore(reducer, initialState, storeEnhancer);