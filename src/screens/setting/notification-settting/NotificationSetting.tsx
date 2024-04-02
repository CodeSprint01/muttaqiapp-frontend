import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppSwitch from '../../../components/molecules/app-switch/AppSwitch';

const NotificationSetting = () => {
  const [isGeneral, setIsGeneral] = useState(false);

  // switches
  const toggleGeneralSwitch = () => {
    setIsGeneral(preState => !preState);
  };

  return (
    <AppContainer>
      <ScreenHeader headerText="Notifications" extraStyle={styles.header} />
      <View style={styles.container}>
        <AppSwitch
          label="General"
          title="Notifications"
          bottomText={isGeneral ? 'On' : 'Off'}
          isEnabled={isGeneral}
          toggleSwitch={toggleGeneralSwitch}
        />
      </View>
    </AppContainer>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
  },
});
