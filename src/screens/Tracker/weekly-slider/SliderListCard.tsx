import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';

interface ListProps {
  dotColor: string;
  listText: string;
  icon: any;
  onPress: () => void;
}

const SliderListCard: FC<ListProps> = ({dotColor, listText, icon, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textIcon}>
        <View style={[styles.dot, {backgroundColor: dotColor}]} />
        <AppText text={listText} style={styles.statsTxt} />
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          <AppIconSvg icon={icon} width={16} height={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SliderListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statsTxt: {
    fontSize: 10,
    fontFamily: fonts.dmSans[400],
    color: COLORS.dark_gray,
    paddingRight: 5,
    textAlign: 'left',
    paddingLeft: 3,
  },
  icon: {
    position: 'absolute',
    right: 4,
  },
  textIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingRight: 10,
    // backgroundColor: 'pink',
  },
});
