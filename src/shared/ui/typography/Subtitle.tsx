import { StyleSheet, Text, TextProps } from 'react-native';
import { TypographyVariables } from '../themed';
import { ScaledSheet } from 'react-native-size-matters';

export enum VariantSubtitle {
  subheading_1 = 'subheading-1',
  subheading_2 = 'subheading-2',
  subheading_3 = 'subheading-3',
}

interface ISubheading extends TextProps {
  variant: VariantSubtitle;
}
const Subtitle = ({ variant, ...props }: ISubheading) => {
  const styles = subtitle(TypographyVariables[variant]);

  return <Text {...props} style={[props.style, styles.titleStyle]} />;
};

const subtitle = ({ size, height }: { size: string; height: string }) =>
  ScaledSheet.create({
    titleStyle: {
      fontSize: size,
      lineHeight: height,
    },
  });

export default Subtitle;
