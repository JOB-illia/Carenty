import type { FC } from 'react';
import { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import {
  Button,
  Checkbox,
  Input,
  Link,
  TextBody,
  variant_body,
  Spaces,
  ThemeColors,
  Colors,
  dark,
  white,
} from '~/src/shared/ui';

import { useAppDispatch, useAppSelector } from '~/src/shared/libs';
import {
  authByEmail,
  handleChangeAuthByEmailInputs,
  handleChangeAuthByEmailSaveToken,
} from './model';
import { ScaledSheet } from 'react-native-size-matters';

const ByEmail: FC = () => {
  const navigation = useContext(NavigationContext);
  const dispatch = useAppDispatch();
  const { saveToken, loading, email, password } = useAppSelector((state) => state.authByEmail);

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Input
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={dark['50']}
          placeholder="Email"
          error={!email.initialState && email.error ? 'Required *' : undefined}
          onChangeText={(text) =>
            dispatch(handleChangeAuthByEmailInputs({ type: 'email', value: text }))
          }
        />
      </View>
      <View style={[styles.col, styles.marginBottom]}>
        <Input
          keyboardType="visible-password"
          textContentType="password"
          placeholderTextColor={dark['50']}
          placeholder="Password"
          error={!password.initialState && password.error ? 'Required *' : undefined}
          onChangeText={(text) =>
            dispatch(handleChangeAuthByEmailInputs({ type: 'password', value: text }))
          }
        />
      </View>
      <View style={styles['save-me']}>
        <Checkbox
          value={saveToken}
          color={saveToken ? Colors.light.primary : undefined}
          label="Keep me logged in"
          onValueChange={() => dispatch(handleChangeAuthByEmailSaveToken())}
        />
        <Link
          title="Forgot password ?"
          variantSizes={variant_body.text_3}
          color={ThemeColors.secondary}
        />
      </View>
      <Button
        loading={loading}
        variants={ThemeColors.secondary}
        onPress={() => dispatch(authByEmail())}
      >
        <TextBody variantSizes={variant_body.text_1} color={white}>
          Continue with Email
        </TextBody>
      </Button>
      <View style={styles.footer}>
        <TextBody variantSizes={variant_body.text_3} style={styles['space-right']}>
          Don’t have an account ?
        </TextBody>
        <Link
          title="Sign Up"
          onPress={() => navigation.navigate('SignUpStepOne')}
          color={ThemeColors.secondary}
          variantSizes={variant_body.text_2}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
  },
  col: {
    marginBottom: Spaces['space-8'] + '@s',
  },
  marginBottom: {
    marginBottom: Spaces['space-8'] + '@s',
  },
  'save-me': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Spaces['space-20'] + '@s',
    marginVertical: Spaces['space-8'] + '@s',
    marginBottom: Spaces['space-20'] + '@s',
  },
  'space-right': {
    marginRight: Spaces['space-8'] + '@s',
  },
  footer: {
    marginVertical: Spaces['space-40'] + '@s',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ByEmail;
