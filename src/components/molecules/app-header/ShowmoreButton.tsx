import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';

interface ListProps {
  todoName: string;
  handelShowmore?: () => void;
  rightTxt: string;
  isShowmore: boolean;
}

const ShowmoreButton: FC<ListProps> = ({
  todoName,
  handelShowmore,
  isShowmore,
  rightTxt,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <AppText numberOfLines={1} text={todoName} style={styles.leftTxt} />
      </View>
      {isShowmore && (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handelShowmore}
          style={styles.showIcon}>
          <AppText text={rightTxt} style={styles.showmore} />
          <AppIconSvg
            icon={Icons.ArrowRight}
            width={20}
            height={20}
            color={COLORS.green}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ShowmoreButton;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '60%',
  },
  showIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftTxt: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
  },
  showmore: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
});
