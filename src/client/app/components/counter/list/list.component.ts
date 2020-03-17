import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'am-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnChanges {
  @Input() counterValue;

  constructor() {}

  /* Sempre que o valor de input do componente for trocado, esta função será chamada */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.counter && changes.counter.currentValue) {
      this.counterValue = changes.counter.currentValue;
    }
  }
}
