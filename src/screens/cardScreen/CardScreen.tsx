import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import AzkaarCard from '../../components/molecules/azkaarCard/azkaarCard';
import {ReligiousContent} from '../../types/types';
import {azkaars} from '../../utils/mocks/AzkaarMockData';
import {duas} from '../../utils/mocks/DuasMock';
import hadith from '../../../assets/images/discover-svg/hadith';
import {hadiths} from '../../utils/mocks/HadithMock';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import {COLORS} from '../../styles/color';
import {ScrollView} from 'react-native-gesture-handler';

// interface cardScreenProps {
//   data: ReligiousContent[];
// }
const getData = (content: string): ReligiousContent[] => {
  console.log('from get data ', content);
  switch (content.toLowerCase()) {
    case 'azkaar':
      console.log('azkaar triggered');
      return azkaars;
    case 'dua':
      return duas;
    case 'hadith':
      return hadiths;
    default:
      return [];
  }
};

const CardScreen = ({route}) => {
  const data = getData(route.params.title);
  return (
    <AppContainer>
      <View style={{paddingHorizontal: 15}}>
        <ScreenHeader headerText={route.params.title} />
        <ScrollView>
          <View style={styles.container}>
            {data.map(item => (
              <AzkaarCard data={item} category={route.params.title} />
            ))}
          </View>
        </ScrollView>
      </View>
    </AppContainer>
  );
};

export default CardScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    // margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
  screen: {
    // backgroundColor: 'green',
    flex: 1,
  },
  cardSection: {},
});
