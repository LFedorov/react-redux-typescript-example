import Actions from './actions';
import * as types from './types';
import { CalcState } from './state';

const DefaultState: CalcState = {
  amount: 0,
};

export function CalcReducer(
  state: CalcState = DefaultState,
  action: Actions,
): CalcState {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, amount: state.amount + action.payload.amount };

    case types.DECREMENT:
      return { ...state, amount: state.amount - action.payload.amount };

    default:
      return state;
  }
}
