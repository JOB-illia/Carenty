import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthSliceState {
  loading: boolean;
  user: any;
  isAuthorization: boolean;
  error: string | null;
  token: null | string;
}

const initialState: IAuthSliceState = {
  loading: false,
  error: null,
  user: null,
  isAuthorization: false,
  token: null,
};

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    viewerIsAuthorizationChange: (state, action: PayloadAction<boolean>) => {
      state.isAuthorization = action.payload;
    },
    viewerChangeToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { viewerIsAuthorizationChange, viewerChangeToken } = viewerSlice.actions;

export const ViewerReducer = viewerSlice.reducer;
