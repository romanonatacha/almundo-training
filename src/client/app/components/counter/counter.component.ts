import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'; /* Observables se inscrevem em uma função e esperam qualquer evento disparado por ela, neste caso qualquer troca no estado user, será captado pelo observable */

import { AppState } from '../../store';
import { getCounterValue } from '../../store/counter/counter.selectors'; /* importa o seletor que retorna o valor do contador */
import { increment } from '../../store/counter/counter.actions'; /* importa as acoes, que são funcoes acionadas por eventos que alteram o estado e retornam seu novo valor */

@Component({
  selector: 'am-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  counterValue$: Observable<number>;

  constructor(
    private store: Store<AppState>,
  ) {} /* Devemos injetar a dependencia da store, que é um estado principal que contem todas as informações */

  incrementCounter() {
    this.store.dispatch(increment());
  }

  ngOnInit() {
    this.counterValue$ = this.store.pipe(select(getCounterValue));
  }
}
