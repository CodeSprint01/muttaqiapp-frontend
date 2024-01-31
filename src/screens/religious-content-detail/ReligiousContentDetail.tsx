import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReligiousContent} from '../../types/types';
import AppContainer from '../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import DetailSection from './DetailSection';

const DetailScreen = ({route}) => {
  const data: ReligiousContent = route.params.data;
  return (
    <AppContainer>
      <View style={{paddingHorizontal: 15}}>
        <ScreenHeader headerText={data.title} />
        {data.content.map(item => (
          <DetailSection text={item} repeat={data.repeat} />
        ))}
      </View>
    </AppContainer>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
