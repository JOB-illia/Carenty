import * as Linking from 'expo-linking';
import type { LinkingOptions } from '@react-navigation/native';

const linking: LinkingOptions<any> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Welcome: {
        screens: {},
      },
      SignUpScreen: {
        screens: {},
      },
      NotFound: '*',
      SignIn: {
        screens: {},
      },
    },
  },
};

export default linking;
