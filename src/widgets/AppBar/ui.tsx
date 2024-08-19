import { View, StatusBar, SafeAreaView } from 'react-native';
import { Spaces, white } from '~/src/shared/ui';
import { Logo } from '~/src/shared/assets/icons';
import { ScaledSheet } from 'react-native-size-matters';

const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={false}
      />
      <View style={styles.container}>
        <Logo />
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    minHeight: Spaces.space * 15 + '@s',
    paddingLeft: Spaces['space-16'] + '@s',
    paddingRight: Spaces['space-16'] + '@s',
    backgroundColor: white,
  },
});

export default AppBar;
