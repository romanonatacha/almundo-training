import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadUser, LoadSetUser, LoadUserError } from './user.actions';
import { UserTypes } from './user.types';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AppState } from '..';
import { UserService } from '../../core/user.service';
import { User } from '../../../../server/api/user/user.service';

@Injectable()
export class UsersEffects {
  constructor(
    private store$: Store<AppState>,
    private actions$: Actions,
    private userService: UserService,
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadUser>(UserTypes.LOAD_USER),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users: User[]) => new LoadSetUser(users)),
          catchError(err => of(new LoadUserError(err))),
        ),
      ),
    ),
  );
}
