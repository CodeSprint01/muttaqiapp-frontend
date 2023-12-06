import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';

interface headerProps {
  headerText: string;
  style?: ViewStyle;
  onPress?: () => void;
}

const HeaderWithIcon: FC<headerProps> = ({headerText, style, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <AppIconSvg
          icon={Icons.ArrowBack}
          width={25}
          height={25}
          color={COLORS.black}
        />
      </TouchableOpacity>
      <AppText text={headerText} style={[styles.headerText, style]} />
    </View>
  );
};

export default HeaderWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 21,
    color: COLORS.lightBlack,
  },
});
