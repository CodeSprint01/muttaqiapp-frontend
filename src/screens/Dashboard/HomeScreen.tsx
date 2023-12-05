import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import PrayerListItem from '../../components/molecules/prayer-list/PrayerListItem';
import {Icons} from '../../utils/helper/svg';
import {COLORS} from '../../styles/color';
import Discover from '../../components/organisums/discoverd-section/Discover';
import {DiscoverEnum} from '../../types/keyVlaue';
import PrayerNotificationsCard from '../../components/molecules/prayer-list/PrayerNotificationsCard';
import AppModal from '../../components/atoms/app-modal/AppModal';
import AppText from '../../components/atoms/app-text/AppText';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const handleDiscoverItem = (type: DiscoverEnum) => {
    console.log(type, 'from home screen');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.heartContainer} />
      <View style={styles.prayerContainer}>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Fajr"
            notificationIcon={Icons.Slient}
            prayerTime="05:11"
            onPress={handleModalVisible}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Dhuhr"
            notificationIcon={Icons.Slient}
            prayerTime="11:56"
            onPress={handleModalVisible}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Asr"
            notificationIcon={Icons.Slient}
            prayerTime="03:40"
            onPress={handleModalVisible}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Maghrib"
            notificationIcon={Icons.Slient}
            prayerTime="07:02"
            onPress={handleModalVisible}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Isha"
            notificationIcon={Icons.Slient}
            prayerTime="08:00"
            onPress={handleModalVisible}
          />
        </View>
        <Discover onDiscoverItemPress={handleDiscoverItem} />
        <AppModal
          children={
            <View style={styles.prayerModalContainer}>
              <AppText
                text={'Adhan and Notifications'}
                style={styles.modalLabel}
              />
              <View style={styles.notificationList}>
                <PrayerNotificationsCard
                  isBorder={true}
                  icon={Icons.Slient}
                  width={17}
                  height={17}
                  label={'Silent'}
                  labelDetail={'No Notifications or adhans.'}
                />
              </View>
              <View style={styles.notificationList}>
                <PrayerNotificationsCard
                  isBorder={true}
                  icon={Icons.Notification}
                  width={15}
                  height={18}
                  label={'Notification'}
                  labelDetail={
                    'Banner Notification only (with default sound). No adhan'
                  }
                />
              </View>
              <View style={styles.notificationList}>
                <PrayerNotificationsCard
                  isBorder={true}
                  icon={Icons.Adhan}
                  width={27}
                  height={17}
                  label={'Adhan'}
                  labelDetail={
                    'Adhan by Mishary Rashid Al-Afasy + banner notification'
                  }
                />
              </View>
            </View>
          }
          isVisible={modalVisible}
          toggleModal={handleModalVisible}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  heartContainer: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: 166,
    marginTop: 20,
    borderRadius: 10,
  },

  prayerContainer: {
    backgroundColor: COLORS.white,
    paddingBottom: 40,
  },
  prayer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  prayerModalContainer: {
    marginHorizontal: 20,
    marginBottom: 100,
  },
  modalLabel: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 42,
    marginLeft: 10,
    marginBottom: 100,
  },
  notificationList: {
    marginTop: 40,
  },
});
