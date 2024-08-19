import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Button, TextBody, variant_body, Colors, Spaces, ThemeColors } from '~/src/shared/ui';
import { AppleIcon } from '~/src/shared/assets/icons';
import { ScaledSheet } from 'react-native-size-matters';

const ByApple = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <Button variants={ThemeColors.outline} style={style}>
      <View style={styles.appleIcon}>
        <AppleIcon />
      </View>
      <TextBody variantSizes={variant_body.text_1} style={styles.text}>
        Log In with Apple
      </TextBody>
    </Button>
  );
};

const styles = ScaledSheet.create({
  text: {
    color: Colors.light.text,
    fontWeight: '500',
  },
  appleIcon: {
    width: Spaces['space-12'] + '@s',
    marginRight: Spaces['space-8'] + '@s',

    svg: {
      width: '100%',
      height: '100%',
    },
  },
});
export default ByApple;
