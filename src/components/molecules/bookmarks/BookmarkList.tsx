import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';

interface BookmarkProps {
  iconOnPress?: () => void;
  icon: any;
  name: string;
  verse?: string | null;
  details: string;
}

const BookmarkList: FC<BookmarkProps> = ({
  iconOnPress,
  icon,
  name,
  verse,
  details,
}) => {
  return (
    <View>
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.leftSide} onPress={iconOnPress}>
          <AppIconSvg icon={icon} width={25} height={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightSide}>
          <View style={styles.txtcontainer}>
            <AppText text={name} style={styles.title} />
            <AppText text={verse} style={styles.title} />
          </View>
          <AppText text={details} style={styles.details} />
          <View style={styles.verticalLine} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookmarkList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    marginTop: 13,
  },
  leftSide: {
    width: '12%',
    alignItems: 'center',
  },
  rightSide: {
    width: '88%',
  },
  txtcontainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
    color: COLORS.green,
  },
  verticalLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light_gray,
    marginTop: 12,
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    fontFamily: fonts.dmSans[400],
    color: COLORS.dark_gray,
    paddingTop: 8,
  },
});
