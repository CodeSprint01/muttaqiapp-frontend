import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {COLORS, fonts} from '../../../styles/color';
import {useSelector} from 'react-redux';
import {LoginsInfo, State, screens} from '../../../types/types';
import SettingAndNumber from '../../../components/molecules/setting/SettingAndNumber';
import {useNavigation} from '@react-navigation/native';

const VaultLoginsSetting = () => {
  const navigation = useNavigation();

  const Loginsdata = useSelector(
    (state: State) => state?.settingReducer.loginsData,
  );
  const arrayLength = Loginsdata.length;

  const didAddPress = () => {
    navigation.navigate(screens.LOGINS_CREDENTIALS);
  };
  // display user credentail list
  const renderItem = ({item, index}: {item: LoginsInfo; index: number}) => {
    return (
      <>
        <SettingAndNumber
          number={index + 1}
          title={item?.title}
          didSettingPress={() =>
            navigation.navigate(screens.LOGINS_CREDENTIALS, {data: item})
          }
        />
        {index === arrayLength - 1 && <View style={{paddingBottom: 20}} />}
      </>
    );
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Logins" extraStyle={styles.header} />
      <View style={styles.container}>
        <PlusIconWithText text="Add new" onPress={didAddPress} />
      </View>
      <View style={styles.setting}>
        <FlatList
          data={Loginsdata}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
    </AppContainer>
  );
};

export default VaultLoginsSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 29,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[700],
    color: COLORS.green,
    textAlign: 'center',
  },
  setting: {
    paddingHorizontal: 20,
    flex: 1,
    // paddingBottom: 0,
  },
});
