import { UserAction } from './user.actions';
import { UserTypes } from './user.types';
import { User } from '../../../../server/api/user/user.service';

export interface UserState {
  users: User[];
  loading: boolean;
  error: Error;
  filter: string;
}

export const initialState: UserState = {
  users: null,
  loading: false,
  error: null,
  filter: ''
};

export function userReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case UserTypes.LOAD_USER:
      return {
        ...state,
        loading: true,
      };

    case UserTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case UserTypes.LOAD_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case UserTypes.UPDATE_SEARCH_USER_SUCCESS:
      return {
        ...state,
        filter: action.payload,
      };

    // case UserTypes.LOAD_SEARCH_USER_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
}
