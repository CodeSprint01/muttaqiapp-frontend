import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../utils/helper/svg';

const UserProfile = () => {
  console.log('userfff');

  return (
    <View style={{backgroundColor: 'green'}}>
      <ScreenHeader headerText="this is long text" rightIcon={Icons.Adhan} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
