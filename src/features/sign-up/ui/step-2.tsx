import type { FC } from 'react';
import { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
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

import { handleChangeSignUpViewerInputs, signUpViewer } from '../model';

export const SignUpStepTwo: FC = () => {
  const navigation = useContext(NavigationContext);
  const dispatch = useAppDispatch();
  const { saveToken, loading, email, password, first_name, last_name, error } = useAppSelector(
    (state) => state.signUp,
  );

  const handleSignUp = () => {
    console.log('click');
    dispatch(signUpViewer());
  };

  console.log(error);

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Input
          keyboardType="name-phone-pad"
          textContentType="namePrefix"
          placeholderTextColor={dark['50']}
          placeholder="First name"
          error={!first_name.initialState && first_name.error ? 'Required *' : undefined}
          onChangeText={(text) =>
            dispatch(handleChangeSignUpViewerInputs({ type: 'first_name', value: text }))
          }
        />
      </View>
      <View style={styles.col}>
        <Input
          keyboardType="name-phone-pad"
          textContentType="nameSuffix"
          placeholderTextColor={dark['50']}
          placeholder="Last name"
          error={!last_name.initialState && last_name.error ? 'Required *' : undefined}
          onChangeText={(text) =>
            dispatch(handleChangeSignUpViewerInputs({ type: 'last_name', value: text }))
          }
        />
      </View>
      <View style={styles.col}>
        <Input
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={dark['50']}
          placeholder="Email"
          error={!email.initialState && email.error ? 'Required *' : undefined}
          onChangeText={(text) =>
            dispatch(handleChangeSignUpViewerInputs({ type: 'email', value: text }))
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
            dispatch(handleChangeSignUpViewerInputs({ type: 'password', value: text }))
          }
        />
      </View>
      <View style={styles['save-me']}>
        <Checkbox
          value={saveToken}
          color={saveToken ? Colors.light.primary : undefined}
          label="Yes, I understand and agree to the Carenty Terms of Service , including Privacy Policy "
          onValueChange={() => undefined}
        />
      </View>
      <Button loading={loading} variants={ThemeColors.secondary} onPress={handleSignUp}>
        <TextBody variantSizes={variant_body.text_1} color={white}>
          Create account
        </TextBody>
      </Button>
      <View style={styles.footer}>
        <TextBody variantSizes={variant_body.text_3} style={styles['space-right']}>
          Here to find the car?
        </TextBody>
        <Link
          title="Join as lessor"
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
