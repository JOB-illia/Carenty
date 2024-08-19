import AsyncStorage from '@react-native-async-storage/async-storage';
import { viewerChangeToken, viewerIsAuthorizationChange } from '~/src/entities/viewer';

import { apiSignUpViewer } from '../api';
import { signUpSlice } from './slice';
import type { TSignUpInputName } from '../lib/types';

const { signUpViewerFulfilled, signUpViewerPending, signUpViewerReject } = signUpSlice.actions;

export const signUpViewer = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch(signUpViewerPending());

    const { signUp } = getState();
    const { email, password, saveToken, first_name, last_name } = signUp;
    const errors: Record<TSignUpInputName, boolean> = {
      email: email.error,
      password: password.error,
      first_name: first_name.error,
      last_name: last_name.error,
    };
    const isValid = Object.values(errors).some((error) => error);

    if (isValid) {
      dispatch(signUpViewerReject('Please enter all inputs'));
    } else {
      const { data } = await apiSignUpViewer({
        email: email.value,
        password: password.value,
        last_name: last_name.value,
        first_name: first_name.value,
      });
      await AsyncStorage.setItem('token', data.token.token);

      dispatch(viewerChangeToken(data.token.token));
      dispatch(viewerIsAuthorizationChange(true));
      dispatch(signUpViewerFulfilled());
      console.log(data);
    }
  } catch (e: unknown) {
    console.log(e);

    return dispatch(signUpViewerReject(`Error: ${e}`));
  }
};
