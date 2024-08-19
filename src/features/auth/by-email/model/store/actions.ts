import AsyncStorage from '@react-native-async-storage/async-storage';
import { viewerChangeToken, viewerIsAuthorizationChange } from '~/src/entities/viewer';

import { apiAuthByEmail } from '../api';
import { authByEmailSlice } from './slice';
import type { TInputName } from '../lib/types';

const { authByEmailPending, authByEmailFulfilled, authByEmailReject } = authByEmailSlice.actions;

export const authByEmail = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(authByEmailPending());

    const { authByEmail } = getState();
    const { email, password, saveToken } = authByEmail;
    const errors: Record<TInputName, boolean> = {
      email: email.error,
      password: password.error,
    };
    const isValid = Object.values(errors).some((error) => error);

    if (isValid) {
      dispatch(authByEmailReject('Please enter all inputs'));
    } else {
      const { data } = await apiAuthByEmail({ email: email.value, password: password.value });

      if (saveToken) {
        await AsyncStorage.setItem('token', data.token);
      }

      dispatch(viewerChangeToken(data.token));
      dispatch(viewerIsAuthorizationChange(true));
      dispatch(authByEmailFulfilled());
    }
  } catch (e: unknown) {
    return dispatch(authByEmailReject(`Error: ${e}`));
  }
};
