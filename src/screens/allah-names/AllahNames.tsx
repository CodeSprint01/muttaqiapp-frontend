import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import AllahNameCard from './AllahNameCard';
import {AllahNamesArray} from '../../utils/mocks/AllMockArray';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../types/types';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS} from '../../styles/color';

const AllahNames = () => {
  const navigation = useNavigation();
  return (
    <AppContainer>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{marginHorizontal: 20}}>
          <ScreenHeader headerText="Allah Names" />
        </View>
        <View
          style={{
            paddingTop: 27,
            // backgroundColor: 'red',
            // paddingBottom: 100,
          }}>
          <FlatList
            data={AllahNamesArray}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <AllahNameCard
                key={item.id}
                arabic={item.arabic}
                english={item.english}
                meaning={item.meaning}
                style={styles.cardShadow}
                index={index}
                onPress={() =>
                  navigation.navigate(screens.HOME_STACK, {
                    screen: screens.ALLAH_NAMES_DESCRIPTION,
                    params: {
                      item,
                    },
                  })
                }
              />
            )}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default AllahNames;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
