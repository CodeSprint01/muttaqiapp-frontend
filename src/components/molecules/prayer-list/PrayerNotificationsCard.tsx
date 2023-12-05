import {StyleSheet, View, TextStyle, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg} from '../../atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';

interface notiProps {
  icon: string;
  label: string;
  labelStyle?: TextStyle;
  labelDetail?: string;
  width?: number;
  height?: number;
  isBorder?: boolean;
  onPress?: () => void;
}
const PrayerNotificationsCard: FC<notiProps> = ({
  icon,
  label,
  labelStyle,
  labelDetail,
  width,
  height,
  isBorder = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={isBorder ? styles.withBorder : styles.container}>
      <View style={styles.icon}>
        <AppIconSvg
          icon={icon}
          width={width}
          height={height}
          color={COLORS.black}
        />
      </View>
      <View style={styles.textContainer}>
        <AppText text={label} style={[styles.label, labelStyle]} />
        {labelDetail && <AppText text={labelDetail} style={styles.detail} />}
      </View>
    </TouchableOpacity>
  );
};

export default PrayerNotificationsCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  textContainer: {
    width: '85%',
    paddingRight: 3,
    paddingBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 8,
  },
  detail: {
    fontSize: 12,
    color: COLORS.quaternary,
    paddingBottom: 8,
    paddingTop: 4,
  },
  withBorder: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
});
