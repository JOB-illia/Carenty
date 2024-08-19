import type { FC } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { GoogleIcon } from '~/src/shared/assets/icons';

import { borderRadius, Colors, Spaces } from '../themed';
import { ScaledSheet } from 'react-native-size-matters';

const GoogleLogo: FC<ViewProps> = ({ ...props }) => {
  return (
    <View style={styles.google} {...props}>
      <GoogleIcon />
    </View>
  );
};

const styles = ScaledSheet.create({
  google: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: Spaces.space * 9 + '@s',
    minHeight: Spaces.space * 9 + '@s',
    backgroundColor: Colors.light.background,
    borderRadius: borderRadius['100'] + '@s',
  },
});
export default GoogleLogo;
