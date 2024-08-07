import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import SettingList from '../../../components/molecules/setting/SettingList';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../types/types';

const AllPasswords = () => {
  const navigation = useNavigation();

  const didSettingPress = () => {
    //
    navigation.navigate(screens.CHANGE_PASSWORD);
  };
  return (
    <AppContainer style={styles.container}>
      <ScreenHeader
        headerText="Password & security"
        extraStyle={styles.header}
      />
      <View style={styles.container}>
        <SettingList title={'Change password'} onPress={didSettingPress} />
      </View>
    </AppContainer>
  );
};

export default AllPasswords;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
