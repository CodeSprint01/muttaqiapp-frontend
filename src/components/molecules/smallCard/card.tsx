import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../atoms/app-text/AppText';
import {inlineStyles} from 'react-native-svg';
import {Icons} from '../../atoms/app-icon-svg';

interface cardProps {
  azkaar: any;
  onPress: () => void;
}

const smaallCard: FC<cardProps> = ({icon, name, time, onPress}) => {
  const backgroundImg = require('../../../../assets/images/azkaar-section/leaves.png');

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        style={[styles.background]}
        source={backgroundImg}
        resizeMode="cover"></ImageBackground>
      <View style={styles.column}>
        {/* <Image source={} resizeMode="cover" />
         */}
        {icon}
        <View style={styles.text}>
          <AppText style={styles.name} text={name}></AppText>
          <AppText style={styles.time} text={time}></AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default smaallCard;

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 150,
    backgroundColor: COLORS.pale_mint,
    borderRadius: 30,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.primary,
    borderLeftColor: COLORS.primary,
    borderLeftWidth: 0.5,
    margin: 8,
    overflow: 'hidden',
    // border-left: 0.5px solid var(--gradient, #1290A1),
  },
  background: {
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '97%',
    height: '97%',
  },

  name: {
    // position: 'absolute',
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
    alignItems: 'center',
  },
  time: {
    // position: 'absolute',
    paddingTop: 3,
    fontWeight: '500',
    color: COLORS.primary,
    alignItems: 'center',
  },

  column: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
  },
  text: {
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    flex: 2,
    paddingTop: 10,
  },
});
