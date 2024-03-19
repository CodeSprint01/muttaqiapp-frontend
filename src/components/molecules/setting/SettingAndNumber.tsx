import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';

interface ListProps {
  number: number;
  title: string;
  didSettingPress: () => void;
}

const SettingAndNumber: FC<ListProps> = ({number, title, didSettingPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={didSettingPress}>
      <View style={styles.listContainer}>
        <View style={styles.iconAndName}>
          <AppText style={styles.title} text={`${number}. ${title}`} />
        </View>
        <View style={styles.icon}>
          <AppIconSvg
            icon={Icons.ArrowRight}
            width={24}
            height={24}
            color={COLORS.light_black_gray}
          />
        </View>
      </View>
      <View style={styles.verticalLine} />
    </TouchableOpacity>
  );
};

export default SettingAndNumber;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLORS.pale_mint,
    flexDirection: 'row',
    height: 50,
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 14,
  },
  iconAndName: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
  },
  title: {
    paddingLeft: 14,
    color: COLORS.dark_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  verticalLine: {
    width: '100%',
    backgroundColor: COLORS.pale_aqua,
    height: 1,
  },
});
