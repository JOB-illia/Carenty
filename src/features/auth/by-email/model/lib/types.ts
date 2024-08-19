export type TInputName = 'email' | 'password';

export interface IInput {
  value: string;
  error: boolean;
  initialState: boolean;
}

export interface AuthByEmailSliceState {
  loading: boolean;
  error: string | null;
  email: IInput;
  password: IInput;
  saveToken: boolean;
}
