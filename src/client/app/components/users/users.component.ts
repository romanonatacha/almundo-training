import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../store';
import { LoadUser } from '../../store/user/user.actions';
import { getUsers } from '../../store/user/user.selectors';
import { Observable } from 'rxjs';
import { User } from '../../../../server/api/user/user.service';

@Component({
  selector: 'am-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUser());
    this.users$ = this.store.pipe(select(getUsers));
  }
}
