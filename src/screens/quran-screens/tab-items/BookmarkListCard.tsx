import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
interface BookmarkProps {
  onPress: () => void;
  icon: any;
  surahName: string;
  surahType: string;
  length: number;
}
const BookmarkListCard: FC<BookmarkProps> = ({
  onPress,
  icon,
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
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <AppIconSvg icon={icon} width={25} height={25} color="gray" />
          </TouchableOpacity>
          <View style={styles.verticalLine} />
        </View>
        <View>
          <Text style={styles.surahName} numberOfLines={1}>
            {surahName}
          </Text>
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

export default BookmarkListCard;

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
    // backgroundColor: 'red',
    paddingRight: 100,
  },
  lineAndText: {
    flexDirection: 'row',
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 29,
    marginTop: 7,
  },
  description: {
    flexDirection: 'row',
  },
  surahTypes: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.lightGray,
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
    backgroundColor: COLORS.lightGray,
    marginVertical: 16,
  },
});
