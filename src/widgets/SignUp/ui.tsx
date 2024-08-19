import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Subtitle,
  VariantSubtitle,
  Spaces,
  dark,
  Divider,
  TextBody,
  variant_body,
} from '~/src/shared/ui';
import { SignUpStepOne, SignUpStepTwo } from '~/src/features/sign-up';
import { AuthByApple, AuthByGoogle } from '~/src/features/auth';
import { ScaledSheet } from 'react-native-size-matters';

export enum Steps {
  'step-1' = 'step-1',
  'step-2' = 'step-2',
}

interface ISignUpWidgets {
  step: Steps;
}

const SignUpWidgets: FC<ISignUpWidgets> = ({ step }) => {
  return (
    <View style={styles.wrapper}>
      <Subtitle variant={VariantSubtitle.subheading_1} style={styles.title}>
        Join as lessor or <Text style={styles.br}>client</Text>
      </Subtitle>
      {step === Steps['step-1'] && <SignUpStepOne />}
      {step === Steps['step-2'] && (
        <View>
          <View style={styles.auth}>
            <View style={styles.col}>
              <AuthByGoogle />
            </View>
            <View style={styles.col}>
              <AuthByApple />
            </View>
          </View>
          <Divider>
            <TextBody variantSizes={variant_body.text_2} style={styles.or}>
              or
            </TextBody>
          </Divider>
          <SignUpStepTwo />
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: Spaces.space * 50 + '@s',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: Spaces['space-40'] + '@s',
  },
  auth: {
    width: '100%',
    flexBasis: '100%',
    elevation: 5,
  },
  col: {
    marginBottom: Spaces['space-8'] + '@s',
  },
  or: {
    marginHorizontal: Spaces['space-8'] + '@s',
    color: dark['300'],
  },
  br: {
    flexBasis: '100%',
  },
});

export default SignUpWidgets;
