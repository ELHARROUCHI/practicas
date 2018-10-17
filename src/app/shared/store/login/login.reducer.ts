import { UserLoginState, initialLoginState } from './login.state';
import {
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  UserLoginActions
} from './login.action';

export function loginReducer(userLoginState: UserLoginState = initialLoginState, action: UserLoginActions) {

  switch (action.type) {
    case USER_LOGIN:
      return {
        ...userLoginState,
        loading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...userLoginState,
        loading: false,
        loaded: true,
        user: action.user
      };
    case USER_LOGIN_FAIL:
      return {
        ...userLoginState,
        loading: false,
        loaded: false,
        error: action.payload
      };
    default:
      return userLoginState;
  }

}
