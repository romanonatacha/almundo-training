import { createReducer, on, Action } from '@ngrx/store';

import { increment, decrement, reset, set } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState = { value: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return { value: state.value + 1 };
  }),
  on(decrement, state => {
    if (state.value === 0) {
      return state;
    }
    return { value: state.value - 1 };
  }),
  on(reset, () => {
    return { value: 0 };
  }),
  on(set, (_, action) => {
    return { value: action.n };
  }),
);

export function reducer(state: CounterState, action: Action) {
  return counterReducer(state, action);
}
