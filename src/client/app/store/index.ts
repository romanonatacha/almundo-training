import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { CounterState, reducer as counterReducer } from './counter/counter.reducer';
import { UserState, userReducer } from './user/user.reducer';

export interface AppState {
  counter: CounterState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  user: userReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
