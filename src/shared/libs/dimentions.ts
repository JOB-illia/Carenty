import { Dimensions } from 'react-native';

const { width, fontScale } = Dimensions.get('window');
const height = Dimensions.get('window').height;
const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;

export default {
  window: {
    width,
    height,
  },
  screen: {
    height: screen_height,
    width: screen_width,
  },
  isSmallDevice: width < 375,
  fontScale: fontScale,
};
