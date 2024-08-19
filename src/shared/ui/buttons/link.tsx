import type { FC } from 'react';
import { StyleSheet, Pressable, PressableProps } from 'react-native';
import { Colors, ThemeColors, TThemeColors } from '~/src/shared/ui/themed';
import { TextBody, variant_body } from '../typography';

type Props = PressableProps & {
  variants?: ThemeColors;
  color?: TThemeColors;
  variantSizes?: variant_body;
  title: string;
};
const Link: FC<Props> = ({
  color = ThemeColors.secondary,
  variantSizes = variant_body.text_1,
  title,
  ...props
}) => {
  return (
    <Pressable {...props}>
      <TextBody variantSizes={variantSizes} style={styles.link} color={Colors.light[color]}>
        {title}
      </TextBody>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  link: {
    fontWeight: '600',
  },
});

export default Link;
