import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
interface ListProps {
  onPress: () => void;
  indx: number;
  surahName: string;
  surahType: string;
  length: number;
}
const SurahListCard: FC<ListProps> = ({
  onPress,
  indx,
  surahName,
  surahType,
  length,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.listContainer}>
        <View style={styles.lineAndText}>
          <AppText text={indx} style={styles.number} />
          <View style={styles.verticalLine} />
        </View>
        <View>
          <AppText text={surahName} style={styles.surahName} />
          <View style={styles.description}>
            <AppText text={surahType} style={styles.surahTypes} />
            <View
              style={[
                styles.verticalLine,
                {height: 15, width: 1.5, marginTop: 9, marginHorizontal: 8},
              ]}
            />
            <AppText text={`${length} Verses`} style={styles.verses} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.largeVerticallie} />
    </>
  );
};

export default SurahListCard;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLORS.pale_mint,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 30,
  },
  number: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.green,
    paddingVertical: 10,
  },
  surahName: {
    color: COLORS.medium_gray,
    fontSize: 20,
    fontWeight: '500',
  },
  lineAndText: {
    flexDirection: 'row',
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: COLORS.light_black_gray,
    marginHorizontal: 29,
    marginTop: 7,
  },
  description: {
    flexDirection: 'row',
  },
  surahTypes: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.light_black_gray,
    paddingTop: 5,
  },
  verses: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.light_gray,
    marginTop: 5,
  },
  largeVerticallie: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light_black_gray,
    marginVertical: 16,
  },
});
