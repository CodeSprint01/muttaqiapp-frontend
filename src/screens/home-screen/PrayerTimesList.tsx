import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';
import {FlatList} from 'react-native-gesture-handler';
import moment from 'moment-timezone';
import {Icons} from '../../utils/helper/svg';
import {Prayers} from '../../utils/helper/constant';
import {useDispatch} from 'react-redux';
import {getPrayers} from '../../redux/prayer/action';

const PrayerTimesList = () => {
  const [updatedPrayers, setUpdatePrayers] = useState(Prayers);
  const dispatch = useDispatch();

  // here is prayer time array

  useEffect(() => {
    const currentTime = moment(new Date()).format('h:mm A');
    const updated = [...updatedPrayers];
    // const interval = setInterval(() => {
    updated.forEach(item => {
      if (item.prayerTime < currentTime) {
        item.isOfferedTimePassed = item.prayerTime < currentTime;
      } else item.notification.isOn = true;
    });
    setUpdatePrayers(updated);
    dispatch(getPrayers(updated));
    // console.log(updated, 'this is updated');

    console.log('test');
    // }, 4000);
    // return () => clearTimeout(interval);
  }, []);

  // here is offer prayed icon fun
  const offerPrayed = () => {
    return Icons.TickCircle;
    // switch (offerCount) {
    //   case 0:
    //     return Icons.EmptyCircle;
    //   case 1:
    //     return Icons.TickCircle;
    //   default:
    //     return Icons.EmptyCircle;
    // }
  };

  const alarmState = () => {
    switch (alarmCount) {
      case 0:
        return Icons.Alarm;
      case 1:
        return Icons.AlarmSlash;
      case 2:
        return Icons.AlarmCross;
      default:
        return Icons.Alarm;
    }
  };

  useEffect(() => {}, []);

  // // here return prayer name
  // const prayerName = (prayer: any) => {
  //   // Define how you want to display the prayer name
  //   switch (prayer) {
  //     case Prayer.Fajr:
  //       return 'Fajr';
  //     case Prayer.Sunrise:
  //       return 'Sunrise';
  //     case Prayer.Dhuhr:
  //       return 'Dhuhr';
  //     case Prayer.Asr:
  //       return 'Asr';
  //     case Prayer.Maghrib:
  //       return 'Maghrib';
  //     case Prayer.Isha:
  //       return 'Isha';
  //     default:
  //       return 'None';
  //   }
  // };
  // {moment(prayerTimes.fajr).format('h:mm A')}

  const didPressPrayer = (item: any) => {
    console.log(item);
  };

  const getPrayerIcon = (item: any) => {
    if (item.isOfferedTimePassed) {
      if (item.isOffered) {
        return Icons.TickCircle;
      } else return Icons.EmptyCircle;
    } else if (item.notification.isSilent) return Icons.AlarmCross;
    else if (item.notification.isOff) return Icons.AlarmSlash;
    else if (item.notification.isOn) return Icons.Alarm;
    // item.isOffered ? offerPrayed() : alarmState()
  };

  return (
    <View style={styles.container}>
      {/* <Text> {prayerTimes.nextPrayer()}</Text> */}
      <FlatList
        data={updatedPrayers}
        renderItem={({item, index}) => (
          <PrayerAlarmCard
            key={item.id}
            item={item}
            name={item.name}
            time={item.prayerTime}
            prayerIcon={getPrayerIcon(item)}
            onPress={didPressPrayer}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

export default PrayerTimesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
});
