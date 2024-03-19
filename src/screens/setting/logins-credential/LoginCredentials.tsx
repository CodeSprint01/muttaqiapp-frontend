import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppInput from '../../../components/molecules/app-input/AppInput';
import AppButton from '../../../components/molecules/app-button/AppButton';

const LoginCredentials = ({route}) => {
  const credentail = route?.params?.data;
  console.log(credentail, 'll');
  const updateCredentail = () => {
    //
  };

  return (
    <AppContainer>
      <ScreenHeader headerText={credentail?.title} extraStyle={styles.header} />
      <View style={styles.container}>
        <AppInput
          placeholder="Enter Username/email"
          inputLabel="username/email"
          // handleInputChange={(txt: string) => onChangeText(1, txt)}
          inputValue={credentail?.email}
        />
        <View style={styles.inputPass}>
          <AppInput
            placeholder="Enter password"
            inputLabel="Password"
            // handleInputChange={(txt: string) => onChangeText(1, txt)}
            inputValue={credentail?.password}
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.btn}>
            <AppButton
              fill={false}
              buttonText="Delete"
              //   onPress={didCancel}
            />
          </View>
          <View style={styles.btn}>
            <AppButton buttonText="Update" onPress={updateCredentail} />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

export default LoginCredentials;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 27,
  },
  inputPass: {
    marginTop: 12,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  btn: {
    width: '45%',
  },
});
