import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {useNavigation} from '@react-navigation/native';
import {PasswordsInfo, State, screens} from '../../../types/types';
import {useSelector} from 'react-redux';
import {Icons} from '../../../utils/helper/svg';
import SettingList from '../../../components/molecules/setting/SettingList';
import {COLORS, fonts} from '../../../styles/color';

const VaultDriverLicenseAdd = () => {
  const navigation = useNavigation();

  const reduxData = useSelector(
    (state: State) => state?.settingReducer?.licenses,
  );
  const arrayLength = reduxData?.length;
  console.log(reduxData, 'this is redux data');

  const onPressOpen = (id: string) => {
    navigation.navigate(screens.VAULT_DRIVER_LICENSE_CREATE_UPDATE, {data: id});
  };
  const onPressAdd = () => {
    navigation.navigate(screens.VAULT_DRIVER_LICENSE_CREATE_UPDATE);
  };

  const renderItem = ({item, index}: {item: PasswordsInfo; index: number}) => {
    return (
      <View
        key={index}
        style={{marginBottom: index + 1 == arrayLength ? 240 : 0}}>
        <SettingList
          iconName={Icons.idCard}
          title={item?.name}
          onPress={() => onPressOpen(item?.id)}
        />
      </View>
    );
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Driver license" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.addBtn}>
          <PlusIconWithText text="Add license" onPress={onPressAdd} />
        </View>
        <View>
          <FlatList
            data={reduxData?.length > 0 ? reduxData : []}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_item, index) => index.toString()}
          />
        </View>
      </View>
    </AppContainer>
  );
};
export default VaultDriverLicenseAdd;

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
