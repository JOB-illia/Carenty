import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppBar } from '~/src/widgets';
import { useAppSelector } from '~/src/shared/libs';
import { white } from '~/src/shared/ui';

import { linking } from './config';
import HomeScreen from './home-screen';
import SignInScreen from './sign-in-screen';
import SignUpStep1Screen from './sign-up-step-1-screen';
import SignUpStep2Screen from './sign-up-step-2-screen';
import { useEffect } from 'react';

const Navigation = () => {
  const { isAuthorization } = useAppSelector((state) => state.viewer);

  useEffect(() => {}, []);

  return (
    <NavigationContainer linking={linking}>
      {!isAuthorization && <AuthNavigation />}
      {isAuthorization && <AppStack />}
    </NavigationContainer>
  );
};

export default Navigation;

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{ header: AppBar, headerTintColor: white }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUpStepOne" component={SignUpStep1Screen} />
      <Stack.Screen name="SignUpStepTwo" component={SignUpStep2Screen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ header: AppBar }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
