import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';

interface headerprops {
  onPressBookmark: () => void;
  ayatNumber: number;
  bookmark: any;
  onPressFavourite: () => void;
  favourite: any;
  onPressBooksquare: () => void;
  onPressPlayPause: () => void;
  playPause: any;
}
const SurahHeader: FC<headerprops> = ({
  onPressBookmark,
  ayatNumber,
  bookmark,
  onPressFavourite,
  favourite,
  onPressBooksquare,
  onPressPlayPause,
  playPause,
}) => {
  return (
    <View style={styles.largecontainer}>
      <View style={styles.leftView}>
        <TouchableOpacity onPress={onPressBookmark}>
          <AppIconSvg icon={bookmark} width={25} height={25} color="black" />
        </TouchableOpacity>
        <AppText text={ayatNumber} style={styles.ayatNumber} />
      </View>
      <View style={styles.rightView}>
        <TouchableOpacity onPress={onPressFavourite}>
          <AppIconSvg icon={favourite} width={25} height={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBooksquare}>
          <AppIconSvg
            icon={Icons.BookSquare}
            width={25}
            height={25}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPlayPause}>
          <AppIconSvg icon={playPause} width={25} height={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SurahHeader;

const styles = StyleSheet.create({
  largecontainer: {
    backgroundColor: COLORS.light_Powder_Blue,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
  },
  ayatNumber: {
    fontSize: 20,
    fontWeight: '500',
  },
  leftView: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-evenly',
  },
  rightView: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: '45%',
  },
});
