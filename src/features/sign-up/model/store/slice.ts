import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateInputs } from '../lib/constants';
import type { SignUpSliceState, TSignUpInputName } from '../lib/types';

const initialState: SignUpSliceState = {
  loading: false,
  error: null,
  email: InitialStateInputs,
  password: InitialStateInputs,
  first_name: InitialStateInputs,
  last_name: InitialStateInputs,
  saveToken: true,
};
export const signUpSlice = createSlice({
  name: 'auth-by-email',
  initialState,
  reducers: {
    handleChangeSignUpViewerInputs: (
      state,
      action: PayloadAction<{ type: TSignUpInputName; value: string }>,
    ) => {
      state[action.payload.type] = {
        ...state[action.payload.type],
        value: action.payload.value,
        error: action.payload.value.length === 0,
        initialState: false,
      };
    },
    handleChangeSignUpAccept: (state) => {
      state.saveToken = !state.saveToken;
    },
    signUpViewerPending: (state) => {
      state.loading = true;
    },
    signUpViewerFulfilled: (state) => {
      state.loading = false;
      state.error = null;
    },
    signUpViewerReject: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { handleChangeSignUpViewerInputs, handleChangeSignUpAccept } = signUpSlice.actions;
export const SignUpReducer = signUpSlice.reducer;
