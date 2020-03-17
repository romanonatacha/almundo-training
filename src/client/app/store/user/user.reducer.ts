import { UserAction } from './user.actions';
import { UserTypes } from './user.types';
import { User } from '../../../../server/api/user/user.service';

export interface UserState {
  users: User[];
  loading: boolean;
  error: Error;
}

export const initialState = {
  users: null,
  loading: false,
  error: null,
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

    // case UserTypes.LOAD_SEARCH_USER_SUCCESS:
    //   return {
    //     ...state,
    //     users: action.payload,
    //   };

    // case UserTypes.LOAD_SEARCH_USER_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
}
