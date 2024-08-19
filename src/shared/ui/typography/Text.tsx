import { StyleSheet, Text, TextProps } from 'react-native';
import { TypographyVariables } from '../themed';
import { ScaledSheet } from 'react-native-size-matters';

export enum variant_body {
  text_1 = 'text-1',
  text_2 = 'text-2',
  text_3 = 'text-3',
  text_4 = 'text-4',
}

interface ITextBody extends TextProps {
  variantSizes: variant_body;
  color?: string;
}
const TextBody = ({ variantSizes, color, ...props }: ITextBody) => {
  const styles = body({
    size: TypographyVariables[variantSizes].size,
    height: TypographyVariables[variantSizes].height,
    color: color,
  });

  return (
    <Text {...props} style={[props.style, styles.headingStyle, ...(color ? [styles.color] : [])]} />
  );
};

const body = ({ size, height, color }: { size: string; height: string; color?: string }) =>
  ScaledSheet.create({
    headingStyle: {
      fontSize: size,
      lineHeight: height,
    },
    color: {
      color: color,
    },
  });

export default TextBody;
