import * as types from './types';

export interface IncrementAction {
  type: types.INCREMENT;
  payload: {
    amount: number;
  };
}

export interface DecrementAction {
  type: types.DECREMENT;
  payload: {
    amount: number;
  };
}

type Actions = IncrementAction | DecrementAction;
export default Actions;

export function increment(amount: number): IncrementAction {
  return {
    type: types.INCREMENT,
    payload: {
      amount,
    },
  };
}

export function decrement(amount: number): DecrementAction {
  return {
    type: types.DECREMENT,
    payload: {
      amount,
    },
  };
}
