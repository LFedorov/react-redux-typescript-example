import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { CalcState } from './calc/state';
import { CalcReducer } from './calc/reducer';

export interface StoreState {
  calc: CalcState;
}

const rootReducer = combineReducers({
  calc: CalcReducer,
});

let enhancer = applyMiddleware(reduxThunk);

// Enable 'Redux DevTools' in development mode
if (process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('redux-devtools-extension');
  enhancer = composeWithDevTools(enhancer);
}

export default createStore(rootReducer, enhancer);
