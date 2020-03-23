import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/client/app/store';

import { UpdateSearch } from '../../../store/user/user.actions';
import { UserState } from 'src/client/app/store/user/user.reducer';
import { getFilteredUsers } from 'src/client/app/store/user/user.selectors';

@Component({
  selector: 'am-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  userState$: Observable<UserState>;

  constructor(private store: Store<AppState>) {
    this.userState$ = this.store.select(getFilteredUsers);
  }

  changeFilter(event: any) {
    this.store.dispatch(new UpdateSearch(event));
  }
  ngOnInit() {
  }
}
