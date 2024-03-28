import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import AppInputWithSearch from '../../../components/molecules/app-input/AppInputWithSearch';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {useNavigation} from '@react-navigation/native';
import {PasswordsInfo, State, screens} from '../../../types/types';
import {useSelector} from 'react-redux';
import {Icons} from '../../../utils/helper/svg';
import SettingList from '../../../components/molecules/setting/SettingList';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';

const VaultPasswordAdd = () => {
  const [searchPassword, setSearchPassword] = useState('');

  const navigation = useNavigation();

  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.passwords,
  );
  const arrayLength = reduxData.length;
  console.log(reduxData, 'this is redux data');

  const filterData = () => {
    return reduxData?.filter(item => {
      return item?.name.toLowerCase().includes(searchPassword.toLowerCase());
    });
  };
  console.log(filterData(), 'this is filter res');
  let test = filterData();
  const renderItem = ({item, index}: {item: PasswordsInfo; index: number}) => {
    return (
      <View style={{marginBottom: index + 1 == arrayLength ? 240 : 0}}>
        <SettingList
          iconName={Icons.Lock}
          title={item?.name}
          didSettingPress={() => onPressOpen(item?.id)}
        />
      </View>
    );
  };

  const onChangeText = (txt: string) => {
    setSearchPassword(txt);
  };
  const onPressOpen = (id: number) => {
    navigation.navigate(screens.VAULT_PASSWORD_CREATE_UPDATE, {data: id});
  };
  const onPressAdd = () => {
    navigation.navigate(screens.VAULT_PASSWORD_CREATE_UPDATE);
  };
  return (
    <AppContainer>
      <ScreenHeader headerText="Passwords" extraStyle={styles.header} />
      <View style={styles.container}>
        <AppInputWithSearch
          placeholder="Search Password"
          onChangeText={txt => onChangeText(txt)}
        />
        <View style={styles.addBtn}>
          <PlusIconWithText text="Add credential" onPress={onPressAdd} />
        </View>
        <View>
          <FlatList
            data={filterData()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_item, index) => index.toString()}
          />
          {test.length !== 0 ? null : searchPassword == '' ? null : (
            <AppText text={'No Credential found!'} style={styles.noData} />
          )}
        </View>
      </View>
    </AppContainer>
  );
};

export default VaultPasswordAdd;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addBtn: {
    marginTop: 20,
  },
  noData: {
    fontSize: 20,
    paddingTop: 20,
    color: COLORS.very_dark_gray,
    fontFamily: fonts.dmSans[500],
  },
});
