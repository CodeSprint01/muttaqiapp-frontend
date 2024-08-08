import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';

const PersonalFinancialInfoSetting = () => {
  const [personalInfoList, setPersonalInfoList] = useState([
    {
      id: 1,
      name: 'General information',
    },
    {
      id: 2,
      name: 'Family information',
    },
    {
      id: 3,
      name: 'Assets information',
    },
    {
      id: 4,
      name: 'Liabilities information',
    },
    {
      id: 5,
      name: 'Nominee information',
    },
    {
      id: 6,
      name: 'Bequest information',
    },
  ]);

  const onPressItem = (name: string) => {
    console.log(name);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.name)}
        style={styles.itemView}>
        <AppText style={styles.itemText} text={item.name} />
        <AppIconSvg
          icon={Icons.ArrowRight}
          height={24}
          width={24}
          color={COLORS.light_gray}
        />
      </TouchableOpacity>
    );
  };

  return (
    <AppContainer style={styles.container}>
      <ScreenHeader headerText="Personal info" extraStyle={styles.header} />
      <View style={styles.listContainer}>
        <FlatList
          data={personalInfoList}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    </AppContainer>
  );
};

export default PersonalFinancialInfoSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  listContainer: {
    marginTop: 20,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    marginHorizontal: 16,
    borderBottomColor: COLORS.light_gray,
  },
  itemText: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
  },
});
