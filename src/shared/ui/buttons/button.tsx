import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { borderRadius, Colors, Spaces, TThemeColors, ThemeColors } from '~/src/shared/ui/themed';
import { SpinnerMini } from '../loaders';

type Props = TouchableOpacityProps & {
  children: ReactNode;
  variants?: ThemeColors;
  loading?: boolean;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  variants = ThemeColors.primary,
  loading = false,
  ...props
}) => {
  const classes = styles({ color: variants });
  const isOutline = variants === ThemeColors.outline;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      disabled={loading}
      style={[
        classes.button,
        ...(isOutline ? [classes.outline] : []),
        ...(loading ? [classes.disabled] : []),
      ]}
    >
      {loading && <SpinnerMini />}
      {!loading && children}
    </TouchableOpacity>
  );
};
const styles = ({ color }: { color: TThemeColors }) =>
  ScaledSheet.create({
    button: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      borderRadius: borderRadius['100'] + '@s',
      backgroundColor: Colors.light[color],
      height: Spaces['space-40'] + '@s',
      width: '100%',
      overflow: 'hidden',
    },

    disabled: {
      opacity: 0.2,
    },
    outline: {
      borderColor: Colors.light.border,
      borderWidth: 1,
      color: Colors.light.text,
      border: '1px solid red',
    },
  });

export default Button;
