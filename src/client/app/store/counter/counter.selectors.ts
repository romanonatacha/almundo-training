import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store'; /* importa da biblioteca */

import { CounterState } from './counter.reducer'; /* importa a classe do estado do reducer */

export const getCounterState = createFeatureSelector<CounterState>(
  'counter',
); /* cria a função que pega o estado */

export const getCounterValue = createSelector(
  getCounterState,

  state => state.value,
); /* exporta a função que pega apenas o valor do counter */
