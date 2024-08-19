import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { borderRadius, dark, greyscale, Spaces } from '../themed';
import { TextBody, variant_body } from '../typography';
import { ScaledSheet } from 'react-native-size-matters';

export const RadioButtonByStep: FC = () => {
  return (
    <View style={styles.radio}>
      <View style={styles.button} />
      <TextBody variantSizes={variant_body.text_2} style={styles.text}>
        Join as client, to find vehicle you need
      </TextBody>
    </View>
  );
};

const styles = ScaledSheet.create({
  radio: {
    width: '100%',
    padding: Spaces['space-20'] + '@s',
    borderColor: greyscale['100'],
    borderWidth: 1,
    borderRadius: borderRadius['12'] + '@s',
  },
  button: {
    width: Spaces['space-20'] + '@s',
    height: Spaces['space-20'] + '@s',
    borderColor: dark['100'],
    borderWidth: 1,
    borderRadius: borderRadius['100'] + '@s',
  },
  text: {
    marginVertical: Spaces['space-20'] + '@s',
    fontWeight: 'bold',
  },
});
