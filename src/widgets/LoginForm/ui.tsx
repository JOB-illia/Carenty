import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Divider,
  Subtitle,
  TextBody,
  variant_body,
  VariantSubtitle,
  Spaces,
  dark,
} from '~/src/shared/ui';
import { AuthByApple, AuthByGoogle, ByEmail } from '~/src/features/auth';
import { ScaledSheet } from 'react-native-size-matters';

interface IAuthByLogin {}

const AuthWidgets: FC<IAuthByLogin> = () => {
  return (
    <View style={styles.wrapper}>
      <Subtitle variant={VariantSubtitle.subheading_1} style={styles.title}>
        Log in to Carenty
      </Subtitle>
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
      <ByEmail />
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
  },
  auth: {
    marginTop: Spaces['space-40'] + '@s',
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
});

export default AuthWidgets;
