import type { FC } from 'react';
import { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { ShowPasswordIcon } from '~/src/shared/assets/icons';

import { TextBody, variant_body } from '../typography';
import { borderRadius, Colors, dark, Spaces } from '../themed';
import { ScaledSheet } from 'react-native-size-matters';

type Props = TextInputProps & {
  error?: string;
};
const Input: FC<Props> = ({ error, ...props }) => {
  const isPassword = props.keyboardType === 'visible-password';
  const [password, setPassword] = useState(isPassword);

  const handleChangeVisibilityPassword = () => {
    setPassword((prevState) => !prevState);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.relative}>
        <TextInput
          {...props}
          style={[styles.input, ...(error ? [styles['input-error']] : [])]}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={password}
        />
        {isPassword && (
          <TouchableOpacity style={styles.button} onPress={handleChangeVisibilityPassword}>
            <ShowPasswordIcon />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View style={styles.error}>
          <TextBody variantSizes={variant_body.text_4} color={Colors.light.danger}>
            {error}
          </TextBody>
        </View>
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    position: 'relative',
  },
  relative: {
    position: 'relative',
  },
  input: {
    textAlign: 'left',
    height: Spaces['space-40'] + '@s',
    borderWidth: 1,
    borderColor: dark['50'],
    borderRadius: borderRadius['12'] + '@s',
    width: '100%',
    paddingHorizontal: Spaces.space * 3 + '@s',
    paddingRight: Spaces['space-64'] + '@s',
    placeholderTextColor: 'red',
  },
  'input-error': {
    borderColor: Colors.light.danger,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: Spaces['space-48'] + '@s',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  svg: {},
  error: {
    position: 'relative',
    marginVertical: Spaces['space-8'] + '@s',
  },
});
export default Input;
