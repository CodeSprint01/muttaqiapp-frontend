import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, fonts} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../types/types';
import AppButton from '../../../components/molecules/app-button/AppButton';

const InheritanceBreakdown = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate(screens.APP_STACK);
  };

  const handleSkip = () => {
    navigation.navigate(screens.APP_STACK);
  };

  const [inheritanceList, setInheritanceList] = useState([
    {
      relation: 'Bequest (nephew)',
      firstName: 'Ali shahid ',
      lastName: 'Ahmed',
      totalInheritance: '7',
      percentage: '50%',
      inheritance: '2',
    },
    {
      relation: 'Husband',
      firstName: 'Mohamed Zafir ',
      lastName: 'Ahmet',
      totalInheritance: '10',
      percentage: '40%',
      inheritance: '4',
    },
    {
      relation: 'Son',
      firstName: 'Hydar',
      lastName: '',
      totalInheritance: '8',
      percentage: '20%',
      inheritance: '2',
    },
    {
      relation: 'Daughter 1',
      firstName: 'Hydar',
      lastName: '',
      totalInheritance: '8',
      percentage: '20%',
      inheritance: '2',
    },
    {
      relation: 'Mother',
      firstName: 'Fatima Omar',
      lastName: 'Ahmed',
      totalInheritance: '6',
      percentage: '28%',
      inheritance: '1',
    },
    {
      relation: 'Father',
      firstName: 'Kamal Ahmed',
      lastName: '',
      totalInheritance: '10',
      percentage: '30%',
      inheritance: '2',
    },
  ]);

  return (
    <AppContainer>
      <View style={styles.formContainer}>
        <AppText text={'Inheritance breakdown'} style={styles.formTitle} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          {inheritanceList.map(item => {
            return (
              <>
                <AppText text={item.relation} style={styles.nameText} />
                <View style={styles.mainRowView}>
                  <View style={styles.nameView}>
                    <AppText
                      text={
                        item.lastName
                          ? `${item.firstName}\n${item.lastName}`
                          : item.firstName
                      }
                      style={styles.userNameText}
                    />
                  </View>
                  <View style={styles.inheritanceView}>
                    <AppText
                      text={`${item.inheritance}/${item.totalInheritance}`}
                      style={styles.inheritanceText}
                    />
                  </View>
                  <View style={styles.percentageView}>
                    <AppText
                      text={item.percentage}
                      style={styles.percentageText}
                    />
                  </View>
                </View>
              </>
            );
          })}
        </ScrollView>
        <View style={styles.bottomBtns}>
          <AppButton buttonText={'Next'} onPress={handleNext} />
          <View style={styles.skipBtn}>
            <AppButton buttonText={'Skip'} fill={false} onPress={handleSkip} />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

export default InheritanceBreakdown;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
    paddingHorizontal: 20,
  },
  formTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    paddingTop: 60,
  },
  nameText: {
    color: COLORS.green,
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
  },
  scroll: {
    flex: 1,
    marginTop: 30,
  },
  bottomBtns: {
    width: '100%',
    backgroundColor: COLORS.pale_mint,
  },
  skipBtn: {
    marginTop: 20,
    marginBottom: 40,
  },
  userNameText: {
    color: COLORS.dark_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[400],
  },
  inheritanceText: {
    color: COLORS.dark_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  percentageText: {
    color: COLORS.dark_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  mainRowView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBlockColor: COLORS.light_gray,
    paddingBottom: 12,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  nameView: {
    flex: 1,
  },
  percentageView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inheritanceView: {
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
