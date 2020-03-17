import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { CounterState, reducer as counterReducer } from './counter/counter.reducer';

export interface AppState {
  counter: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
