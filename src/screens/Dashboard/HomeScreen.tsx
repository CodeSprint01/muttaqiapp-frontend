import {View, StyleSheet} from 'react-native';
import React from 'react';
import PrayerListItem from '../../components/molecules/prayer-list/PrayerListItem';
import {Icons} from '../../utils/helper/svg';
import {COLORS} from '../../styles/color';
import Discover from '../../components/organisums/discoverd-section/Discover';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.heartContainer} /> */}
      <View style={styles.prayerContainer}>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Fajr"
            notificationIcon={Icons.Slient}
            prayerTime="05:11"
            onPress={() => console.log('prayer click')}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Dhuhr"
            notificationIcon={Icons.Slient}
            prayerTime="11:56"
            onPress={() => console.log('prayer click')}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Asr"
            notificationIcon={Icons.Slient}
            prayerTime="03:40"
            onPress={() => console.log('prayer click')}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Maghrib"
            notificationIcon={Icons.Slient}
            prayerTime="07:02"
            onPress={() => console.log('prayer click')}
          />
        </View>
        <View style={styles.prayer}>
          <PrayerListItem
            PrayerName="Isha"
            notificationIcon={Icons.Slient}
            prayerTime="08:00"
            onPress={() => console.log('prayer click')}
          />
        </View>
        <Discover />
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
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
  },
  prayer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
