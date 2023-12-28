import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';
import {FlatList} from 'react-native-gesture-handler';
import Prayers from '../../utils/mocks/PrayerTime';
import {Icons} from '../../utils/helper/svg';

// interface prayerProps {
//   onPress: () => void;
// }

const PrayerTimes = () => {
  const [isPrayerTime, setIsPrayerTime] = useState({
    fajar: true,
    duhar: true,
    asar: true,
    maghrib: true,
    isha: true,
  });
  const [icon, setIcon] = useState(0);
  // const getIcon = () => {};
  // if (!isPrayerTime && icon === 3) {
  //   return Icons.RingIcon;
  // }
  // else if (!isPrayerTime && ) {
    
  // }
  const onPress = index => {
    const prayer = Prayers[index];
    
    console.log(prayer);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={Prayers}
        renderItem={({item, index}) => (
          <PrayerAlarmCard
            name={item.name}
            time={item.time}
            onPress={() => onPress(index)}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PrayerTimes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
});
