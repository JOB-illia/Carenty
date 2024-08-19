export type TSignUpInputName = 'email' | 'password' | 'first_name' | 'last_name';

export interface ISignUpInput {
  value: string;
  error: boolean;
  initialState: boolean;
}

export interface SignUpSliceState {
  loading: boolean;
  error: string | null;
  email: ISignUpInput;
  password: ISignUpInput;
  first_name: ISignUpInput;
  last_name: ISignUpInput;
  saveToken: boolean;
}
