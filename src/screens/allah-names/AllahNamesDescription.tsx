import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import AllahNameCard from './AllahNameCard';
import {allahNamesDescription} from '../../types/types';
import {COLORS} from '../../styles/color';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import AppText from '../../components/atoms/app-text/AppText';

const AllahNamesDescription = ({route}) => {
  const data = route.params.item;
  console.log(data);

  return (
    <AppContainer style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 20}}>
          <ScreenHeader headerText="Allah Names" />
        </View>
        <View style={{flex: 1, paddingTop: 30}}>
          <AllahNameCard
            key={data?.id}
            arabic={data?.arabic}
            english={data?.english}
            meaning={data?.meaning}
          />
        </View>
        <View style={{flex: 3, paddingHorizontal: 20}}>
          {data?.allahNamesDescription?.map((item: allahNamesDescription) => (
            <View key={item.meaningDescription}>
              <AppText
                style={styles.txt}
                text={`Meaning: ${item?.meaningDescription}`}
              />
              <AppText
                style={styles.txt}
                text={`Occurrence: ${item?.occurrence}`}
              />
              <AppText
                style={styles.txt}
                text={`Occurrence: ${item?.evidance}`}
              />
            </View>
          ))}
        </View>
      </View>
    </AppContainer>
  );
};

export default AllahNamesDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  txt: {
    color: COLORS.dark_gray,
    paddingTop: 20,
    fontSize: 16,
  },
});
