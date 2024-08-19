import { configureStore } from '@reduxjs/toolkit';
import { ViewerReducer } from '~/src/entities/viewer';
import { AuthByEmailReducer } from '~/src/features/auth/by-email';
import { SignUpReducer } from '~/src/features/sign-up';

export const store = configureStore({
  reducer: {
    viewer: ViewerReducer,
    authByEmail: AuthByEmailReducer,
    signUp: SignUpReducer,
  },
  devTools: true,
});
