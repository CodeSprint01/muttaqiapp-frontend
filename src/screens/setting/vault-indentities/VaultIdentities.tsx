import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import PlusIconWithText from '../../../components/molecules/app-button/PlusIconWithText';
import {useNavigation} from '@react-navigation/native';
import {IdentityInfo, State, screens} from '../../../types/types';
import {useSelector} from 'react-redux';
import {Icons} from '../../../utils/helper/svg';
import SettingList from '../../../components/molecules/setting/SettingList';

const VaultIdentities = () => {
  // all button action
  const navigation = useNavigation();

  const identityData = useSelector(
    (state: State) => state?.settingReducer?.identities,
  );
  const onPressOpenCard = (id: number) => {
    console.log(id, 'iddddd');
    navigation.navigate(screens.VAULT_IDENTITIES_CREATE_UPDATE, {id: id});
  };
  console.log(identityData, 'hhhh');

  const didAddPress = () => {
    navigation.navigate(screens.VAULT_IDENTITIES_CREATE_UPDATE);
  };
  const renderItem = ({item, index}: {item: IdentityInfo; index: number}) => {
    return (
      <SettingList
        title={item?.name}
        iconName={Icons.idCard}
        didSettingPress={() => onPressOpenCard(item?.id)}
      />
    );
  };
  return (
    <AppContainer>
      <ScreenHeader headerText="Identities" extraStyle={styles.header} />
      <View style={styles.container}>
        <PlusIconWithText text="Add identity" onPress={didAddPress} />
        <View>
          <FlatList
            data={identityData}
            renderItem={renderItem}
            keyExtractor={(_item, index) => index.toString}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default VaultIdentities;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
});
