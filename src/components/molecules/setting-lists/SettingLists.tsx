import {FlatList, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import PrayerNotificationsCard from '../prayer-list/PrayerNotificationsCard';
import {settingArray} from '../../../utils/mocks/SettingArray';
import {settingEnum, settingScreen} from '../../../types/keyVlaue';

interface settingProps {
  handleListItem: (type: settingEnum) => void;
}
const SettingLists: FC<settingProps> = ({handleListItem}) => {
  const renderItem = ({item}: {item: settingScreen}) => {
    return (
      <View style={styles.listContainer}>
        <PrayerNotificationsCard
          label={item.name}
          icon={item.image}
          width={28}
          height={28}
          labelStyle={styles.labelTxt}
          onPress={() => handleListItem(item.type)}
        />
      </View>
    );
  };
  return (
    <>
      {/* <FlatList
        data={settingArray}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      /> */}
    </>
  );
};

export default SettingLists;

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  labelTxt: {
    fontSize: 18,
    fontWeight: '400',
  },
});
