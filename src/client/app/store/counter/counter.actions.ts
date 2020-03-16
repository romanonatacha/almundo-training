import { createAction, props } from '@ngrx/store';

export interface NewValue {
  n: number;
}

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const set = createAction('[Counter] Set', props<NewValue>());
