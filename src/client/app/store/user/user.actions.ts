import { Action } from '@ngrx/store';
import { UserTypes } from './user.types';
import { User } from '../../../../server/api/user/user.service';

export type UserAction = LoadUser | LoadSetUser | LoadUserError | UpdateSearch;

export class LoadUser implements Action {
  readonly type = UserTypes.LOAD_USER;
}

export class LoadSetUser implements Action {
  readonly type = UserTypes.LOAD_USER_SUCCESS;
  constructor(readonly payload: User[]) { }
}

export class LoadUserError implements Action {
  readonly type = UserTypes.LOAD_USER_ERROR;
  constructor(readonly payload: Error) { }
}

export class UpdateSearch implements Action {
  readonly type = UserTypes.UPDATE_SEARCH_USER_SUCCESS;
  constructor(readonly payload: string) { }
}