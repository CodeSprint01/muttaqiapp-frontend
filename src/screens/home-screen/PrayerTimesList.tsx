import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import PrayerAlarmCard from '../../components/molecules/prayer-list/PrayerAlarmCard';
import {FlatList} from 'react-native-gesture-handler';
import moment from 'moment-timezone';
import {Icons} from '../../utils/helper/svg';
import {useSelector} from 'react-redux';
import {UserPrayers} from '../../types/types';

interface PrayerProps {
  didPressPrayer: (item: any) => void;
  prayerData: UserPrayers;
}

const PrayerTimesList: FC<PrayerProps> = ({didPressPrayer, prayerData}) => {
  // const prayerData = useSelector((state: any) => state.prayer.prayerData);

  const getPrayerIcon = (item: any) => {
    if (item?.isOfferedTimePassed) {
      if (item?.isOffered) {
        return Icons.TickCircle;
      } else return Icons.EmptyCircle;
    } else if (item?.notification === 0) return Icons.Alarm;
    else if (item?.notification === 1) return Icons.AlarmSlash;
    else if (item?.notification === 2) return Icons.AlarmCross;
    // item.isOffered ? offerPrayed() : alarmState()
  };

  return (
    <View style={styles.container}>
      {/* <Text> {prayerTimes.nextPrayer()}</Text> */}
      <FlatList
        data={prayerData}
        renderItem={({item, index}) => (
          <PrayerAlarmCard
            key={item?.id}
            item={item}
            name={item?.name}
            time={
              item?.prayerTime ? moment(item?.prayerTime).format('h:mm A') : ''
            }
            prayerIcon={getPrayerIcon(item)}
            onPress={() => didPressPrayer(item)}
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
