import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../../../../server/api/user/user.service';
import { UserState } from 'src/client/app/store/user/user.reducer';

@Component({
  selector: 'am-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnChanges {
  @Input() userState: UserState;
  users: User[];

  filterUsers() {
    if (!this.userState || !this.userState.filter) {
      return;
    }
    console.log('filter: ' + this.userState.filter);
    console.log('users: ' + this.users);
    const filterValue = this.userState.filter.toLowerCase();
    this.users = this.users.filter(
      (u: User) =>
        (u.name && u.name.toLowerCase().indexOf(filterValue) > -1) ||
        (u.email && u.email.toLowerCase().indexOf(filterValue) > -1)
    );
    console.log('filter1: ' + this.userState.filter);
    console.log('users1: ' + this.users);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.userState && changes.userState.currentValue) {
      this.userState = changes.userState.currentValue;
      this.users = this.userState.users;
      this.filterUsers();
    }
  }
}