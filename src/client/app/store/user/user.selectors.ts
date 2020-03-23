import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>('user');

export const getUsers = createSelector(
  getUserState,
  state => state.users,
);

export const getFilteredUsers = createSelector(
  getUserState,
  state => state
);


