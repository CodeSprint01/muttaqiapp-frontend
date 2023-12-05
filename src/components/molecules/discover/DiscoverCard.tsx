import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import {AppIconSvg} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';
interface cardProps {
  icon: string;
  text: string;
  onPress: () => void;
}

const DiscoverCard: FC<cardProps> = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <AppIconSvg
          icon={icon}
          width={42}
          height={42}
          color={COLORS.lightBlack}
        />
      </View>
      <AppText text={text} style={styles.txt} />
    </TouchableOpacity>
  );
};

export default DiscoverCard;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.light_blue,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
  },
});
