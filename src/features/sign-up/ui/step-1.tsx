import { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import {
  Button,
  Link,
  RadioButtonByStep,
  Spaces,
  TextBody,
  ThemeColors,
  variant_body,
  white,
} from '~/src/shared/ui';

import { ScaledSheet } from 'react-native-size-matters';

export const SignUpStepOne = () => {
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <RadioButtonByStep />
      </View>
      <View style={[styles.col, styles.marginBottom]}>
        <RadioButtonByStep />
      </View>
      <Button variants={ThemeColors.secondary} onPress={() => navigation.navigate('SignUpStepTwo')}>
        <TextBody variantSizes={variant_body.text_1} color={white}>
          Create account
        </TextBody>
      </Button>

      <View style={styles.footer}>
        <TextBody variantSizes={variant_body.text_3} style={styles['space-right']}>
          Already have an account ?
        </TextBody>
        <Link
          title="Log In"
          onPress={() => navigation.navigate('SignIn')}
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
    marginBottom: Spaces['space-20'] + '@s',
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
