import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateInputs } from '../lib/constants';
import type { AuthByEmailSliceState } from '../lib/types';

const initialState: AuthByEmailSliceState = {
  loading: false,
  error: null,
  email: InitialStateInputs,
  password: InitialStateInputs,
  saveToken: true,
};
export const authByEmailSlice = createSlice({
  name: 'auth-by-email',
  initialState,
  reducers: {
    handleChangeAuthByEmailInputs: (
      state,
      action: PayloadAction<{ type: 'email' | 'password'; value: string }>,
    ) => {
      state[action.payload.type] = {
        ...state[action.payload.type],
        value: action.payload.value,
        error: action.payload.value.length === 0,
        initialState: false,
      };
    },
    handleChangeAuthByEmailSaveToken: (state) => {
      state.saveToken = !state.saveToken;
    },
    authByEmailPending: (state) => {
      state.loading = true;
    },
    authByEmailFulfilled: (state) => {
      state.loading = false;
      state.error = null;
    },
    authByEmailReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { handleChangeAuthByEmailInputs, handleChangeAuthByEmailSaveToken } =
  authByEmailSlice.actions;
export const AuthByEmailReducer = authByEmailSlice.reducer;
