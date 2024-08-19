import { StyleSheet, View } from 'react-native';
import { Container, Colors, Spaces } from '~/src/shared/ui';
import { LoginFormWidget } from '~/src/widgets';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.section}>
      <Container style={styles.container}>
        <LoginFormWidget />
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.light.background,
    minHeight: '100%',
  },
  container: {
    paddingVertical: Spaces['space-40'],
    paddingLeft: Spaces['space-16'],
    paddingRight: Spaces['space-16'],
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: Colors.light.background,
  },
});

export default SignInScreen;
