export interface UserLoginState {
  user: any;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialLoginState: UserLoginState = {
  user: undefined,
  loaded: false,
  loading: false,
  error: undefined,
};
