import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import { greyscale } from '../themed';
import { useEffect } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

const SIZE = 7.0;

const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

const SpinnerMini: FC = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.spinner,
          { height: SIZE, width: SIZE, backgroundColor: greyscale['100'] },
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  spinner: {
    width: 10 + '@s',
    height: 10 + '@s',
    borderRadius: 100 + '@s',
    borderWidth: 1,
    borderColor: greyscale['300'],
  },
});

export default SpinnerMini;
