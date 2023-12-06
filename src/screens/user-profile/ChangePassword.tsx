import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../components/atoms/app-icon-svg';
import {COLORS} from '../../styles/color';
import HeaderWithIcon from '../../components/molecules/header/HeaderWithIcon';
import {useNavigation} from '@react-navigation/native';
import AppInput from '../../components/molecules/app-input/AppInput';
import AppButton from '../../components/molecules/app-button/AppButton';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [showPass, setShowPass] = useState({
    currentPass: false,
    newPass: false,
    confNewPass: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderWithIcon
          headerText="Change Password"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <AppInput
            inputLabel="Current Password"
            ImageName={
              showPass.currentPass ? Icons.PassEye : Icons.PassEyeSlash
            }
            imageWidth={23}
            imageHeight={23}
            secureTextEntry={showPass.currentPass}
            onPress={() =>
              setShowPass(prevVal => ({
                ...prevVal,
                currentPass: !prevVal.currentPass,
              }))
            }
          />
        </View>
        <View style={styles.input}>
          <AppInput
            inputLabel="New Password"
            ImageName={showPass.newPass ? Icons.PassEye : Icons.PassEyeSlash}
            imageWidth={23}
            imageHeight={23}
            secureTextEntry={showPass.newPass}
            onPress={() =>
              setShowPass(prevVal => ({...prevVal, newPass: !prevVal.newPass}))
            }
          />
        </View>
        <View style={styles.input}>
          <AppInput
            inputLabel="Confirm New Password"
            ImageName={
              showPass.confNewPass ? Icons.PassEye : Icons.PassEyeSlash
            }
            imageWidth={23}
            imageHeight={23}
            secureTextEntry={showPass.confNewPass}
            onPress={() =>
              setShowPass(prevVal => ({
                ...prevVal,
                confNewPass: !prevVal.confNewPass,
              }))
            }
          />
        </View>
        <View style={styles.input}>
          <AppButton
            buttonText="Update Password"
            withOpacity={0.5}
            textStyle={styles.updatePass}
            onPress={() => console.log('update pass')}
          />
        </View>
        <View style={styles.input}>
          <AppButton
            buttonText="Cancel"
            textStyle={styles.cancelBtn}
            buttonStyle={styles.btnSty}
            withOpacity={0.5}
            onPress={() => console.log('cacel pass')}
          />
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingLeft: 18,
    marginTop: 25,
  },
  form: {
    marginHorizontal: 30,
    marginTop: 40,
  },
  input: {
    marginTop: 28,
  },
  updatePass: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  cancelBtn: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: '700',
  },
  btnSty: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginTop: -10,
  },
});
