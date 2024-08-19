import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withProviders } from './providers';
import Navigation from '~/src/screens';

const AppRoot = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};
export default withProviders(AppRoot);
