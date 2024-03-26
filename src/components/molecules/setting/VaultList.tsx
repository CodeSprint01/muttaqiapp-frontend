import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';

interface cardProps {
  iconName: any;
  cardName: string;
  didOpenDetails: () => void;
  didRemovePress: () => void;
}

const VaultList: FC<cardProps> = ({
  iconName,
  cardName,
  didRemovePress,
  didOpenDetails,
}) => {
  return (
    <TouchableOpacity onPress={didOpenDetails} style={styles.contianer}>
      <View style={styles.listContainer}>
        <View style={styles.icon}>
          <AppIconSvg
            icon={iconName}
            width={24}
            height={24}
            color={COLORS.green}
          />
        </View>
        <View style={styles.name}>
          <AppText text={cardName} />
        </View>
        <TouchableOpacity onPress={didRemovePress} style={styles.remove}>
          <AppText text={'Remove'} style={styles.removeTxt} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

export default VaultList;

const styles = StyleSheet.create({
  contianer: {
    //
  },
  listContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
  },
  icon: {
    width: '11%',
    justifyContent: 'center',
  },
  name: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 18,
    fontFamily: fonts.dmSans[400],
    color: COLORS.very_dark_gray,
  },
  remove: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  removeTxt: {
    fontSize: 16,
    fontFamily: fonts.dmSans[400],
    color: COLORS.crimson,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light_gray,
  },
});
