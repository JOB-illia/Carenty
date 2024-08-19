import { StyleProp, View, ViewStyle } from 'react-native';
import { Button, TextBody, variant_body, Colors, Spaces } from '~/src/shared/ui';
import { GoogleLogo } from '~/src/shared/ui/logotypes';
import { ScaledSheet } from 'react-native-size-matters';

const ByGoogle = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <Button style={style}>
      <View style={styles.googleLogo}>
        <GoogleLogo />
      </View>
      <TextBody variantSizes={variant_body.text_1} style={styles.text}>
        Log In with Google
      </TextBody>
    </Button>
  );
};

const styles = ScaledSheet.create({
  text: {
    color: Colors.dark.text,
    fontWeight: '500',
  },
  googleLogo: {
    position: 'absolute',
    top: Spaces.space / 2 + '@s',
    left: Spaces.space / 2 + '@s',
  },
});
export default ByGoogle;
