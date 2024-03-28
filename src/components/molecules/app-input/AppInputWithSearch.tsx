import {StyleSheet, TextInputProps, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';

interface InputProps extends TextInputProps {}

const AppInputWithSearch: FC<InputProps> = ({...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Search Password"
          style={styles.inputSty}
          {...props}
        />
        <AppIconSvg
          icon={Icons.Search}
          width={24}
          height={24}
          color={COLORS.medium_gray}
        />
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

export default AppInputWithSearch;

const styles = StyleSheet.create({
  container: {
    //
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
    marginBottom: 5,
  },
  inputSty: {
    width: '89%',
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light_gray,
  },
});
