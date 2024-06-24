import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import {Icons} from '../../../utils/helper/svg';
import {AppIconSvg} from '../../../components/atoms/app-icon-svg';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import AppButton from '../../../components/molecules/app-button/AppButton';
import {screens} from '../../../types/types';
import {useNavigation} from '@react-navigation/native';

const VaultCreateDetails = () => {
  const navigation = useNavigation();
  return (
    <AppContainer>
      <ScreenHeader headerText="Create vault" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.icon}>
          <AppIconSvg
            icon={Icons.Vault}
            width={50}
            height={50}
            color={'black'}
          />
        </View>
        <View style={styles.detailsTxt}>
          <AppText
            style={styles.details}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
        </View>
        <View style={styles.steps}>
          <AppText text={'How to create vault?'} style={styles.title} />
          <AppText
            style={styles.body}
            text={'1. Lorem Ipsum is simply dummy text of'}
          />
          <AppText
            style={styles.body}
            text={'2. Lorem Ipsum is simply dummy text of'}
          />
          <AppText
            style={styles.body}
            text={'3. Lorem Ipsum is simply dummy text of'}
          />
          <AppText
            style={styles.body}
            text={'4. Lorem Ipsum is simply dummy text of'}
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            buttonText="Create vault"
            onPress={() => navigation.replace(screens.CREATE_NEW_VAULT)}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default VaultCreateDetails;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 13,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  icon: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsTxt: {
    flex: 3,
  },
  details: {
    lineHeight: 20,
  },
  steps: {
    flex: 2,
  },
  title: {
    fontSize: 20,
    color: COLORS.green,
    fontFamily: fonts.dmSans[500],
  },
  body: {
    fontSize: 16,
    color: '#292D32',
    fontFamily: fonts.dmSans[400],
    paddingTop: 5,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
  },
});
