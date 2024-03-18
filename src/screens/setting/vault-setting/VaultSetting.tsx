import {View, StyleSheet, ScrollView, FlatList, Platform} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, fonts} from '../../../styles/color';
import SettingList from '../../../components/molecules/setting/SettingList';
import {VaultEnum, vaultScreen} from '../../../types/keyVlaue';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {vaultArray} from '../../../utils/mocks/setting-array/VaultArray';
import {screens} from '../../../types/types';

const VaultSetting = () => {
  const navigation = useNavigation();
  const handleListClick = (type: VaultEnum) => {
    switch (type) {
      case VaultEnum.All_ITEMS:
        console.log('switch 0');
        break;
      case VaultEnum.LOGINS:
        navigation.navigate(screens.VAULT_LOGINS_SETTING, {data: 'usman'});
        break;
      case VaultEnum.SECURE_NOTES:
        console.log('switch 2');
        break;
      case VaultEnum.CREDIT_CARDS:
        console.log('switch 3');
        break;
      case VaultEnum.IDENTITIES:
        console.log('switch 4');
        break;
      case VaultEnum.PASSWORD:
        console.log('switch 5');
        break;
      case VaultEnum.DOCUMENTS:
        console.log('switch 6');
        break;
      case VaultEnum.BANK_ACCOUNTS:
        console.log('switch 7');
        break;
      case VaultEnum.DRIVER_LICENSES:
        console.log('switch 8');
        break;
      case VaultEnum.SOCIAL_SECURITY_NUMBER:
        console.log('switch 9');
        break;
      case VaultEnum.ARCHIVE:
        console.log('switch 10');
        break;
      default:
        break;
    }
  };

  const renderItem = ({item, index}: {item: vaultScreen; index: number}) => {
    return (
      <SettingList
        iconName={item?.image}
        title={item?.name}
        didSettingPress={() => handleListClick(item?.type)}
      />
    );
  };

  return (
    <AppContainer>
      <ScrollView style={styles.container}>
        <ScreenHeader headerText="Vault" extraStyle={styles.header} />
        <View style={styles.setting}>
          <FlatList
            data={vaultArray}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
};

export default VaultSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  header: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.dmSans[700],
    color: COLORS.very_dark_gray,
    paddingLeft: 35,
    paddingTop: 20,
  },
  userProfile: {
    marginTop: 18,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
    }),
  },
  setting: {
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 120,
  },
});
