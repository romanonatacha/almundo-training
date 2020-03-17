import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { User } from '../../../../../server/api/user/user.service';

@Component({
  selector: 'am-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {
  @Input() users: User[];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.users && changes.users.currentValue) {
      this.users = changes.users.currentValue;
    }
  }
}
