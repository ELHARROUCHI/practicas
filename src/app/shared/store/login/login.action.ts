import { Action } from '@ngrx/store';

export const USER_LOGIN = '[Login] user login';
export const USER_LOGIN_SUCCESS = '[Login] user login, success';
export const USER_LOGIN_FAIL = '[Login] user login, fail';

export class UserLogin implements Action {
  readonly type = USER_LOGIN;
  constructor(public email: string, public password: string) { }
}

export class UserLoginSeccess implements Action {
  readonly type = USER_LOGIN_SUCCESS;
  constructor(public user: any) { }
}

export class UserLoginFail implements Action {
  readonly type = USER_LOGIN_FAIL;
  constructor(public payload: any) { }
}

export type UserLoginActions = UserLogin |
  UserLoginSeccess |
  UserLoginFail;
