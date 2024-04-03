import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppSwitch from '../../../components/molecules/app-switch/AppSwitch';
import {COLORS, fonts} from '../../../styles/color';
import NotificationRingtone from '../../../components/organisums/notification-ringtone-setting/NotificationRingtone';

const NotificationSetting = () => {
  const [isGeneral, setIsGeneral] = useState(false);
  const [generalRing, setGeneralRing] = useState(0);
  const [isPrayer, setIsPrayer] = useState(false);
  const [prayerRing, setPrayerRing] = useState(0);

  // switches
  const toggleGeneralSwitch = () => {
    setIsGeneral(preState => !preState);
  };
  const togglePrayerSwitch = () => {
    setIsPrayer(preState => !preState);
  };

  const handleGeneralCheckBox = (numb: number) => {
    console.log(numb);
    setGeneralRing(numb);
  };
  const handlePrayerCheckBox = (numb: number) => {
    console.log(numb);
    setPrayerRing(numb);
  };
  return (
    <AppContainer>
      <ScreenHeader headerText="Notifications" extraStyle={styles.header} />
      <View style={styles.container}>
        <View style={styles.generalNotifi}>
          <AppSwitch
            label="General"
            title="Notifications"
            bottomText={isGeneral ? 'On' : 'Off'}
            isEnabled={isGeneral}
            toggleSwitch={toggleGeneralSwitch}
          />
          <NotificationRingtone
            disable={!isGeneral}
            isChecked={generalRing}
            onToggle={numb => handleGeneralCheckBox(numb)}
          />
        </View>
        <View style={styles.prayerNotifi}>
          <View style={styles.checkBoxContainer}>
            <AppSwitch
              label="Prayers"
              title="Notifications"
              bottomText={isPrayer ? 'On' : 'Off'}
              isEnabled={isPrayer}
              toggleSwitch={togglePrayerSwitch}
            />
            <NotificationRingtone
              disable={!isPrayer}
              isChecked={prayerRing}
              onToggle={numb => handlePrayerCheckBox(numb)}
            />
          </View>
        </View>
      </View>
    </AppContainer>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    marginTop: 16,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
    flex: 1,
  },
  generalNotifi: {
    flex: 1,
  },
  checkBoxContainer: {
    flex: 1,
  },
  ringTxt: {
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    color: COLORS.very_dark_gray,
    marginTop: 20,
  },
  checkBoxes: {
    justifyContent: 'space-evenly',
    flex: 1,
    marginLeft: 12,
  },
  prayerNotifi: {
    flex: 1,
    marginTop: 50,
    marginBottom: 100,
  },
});
