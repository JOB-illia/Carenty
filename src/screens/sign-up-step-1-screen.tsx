import { StyleSheet, View } from 'react-native';
import { Colors, Container, Spaces } from '~/src/shared/ui';
import { SignUpWidgets, Steps } from '~/src/widgets';

const SignUpStep1Screen = ({ navigation }) => {
  return (
    <View style={styles.section}>
      <Container style={styles.container}>
        <SignUpWidgets step={Steps['step-1']} />
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

export default SignUpStep1Screen;
