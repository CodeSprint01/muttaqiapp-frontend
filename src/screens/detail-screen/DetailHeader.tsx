import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import LinearGradient from 'react-native-linear-gradient';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';

const DetailHeader = ({repeat}) => {
  return (
    <View
      style={repeat ? styles.row : [styles.row, {justifyContent: 'flex-end'}]}>
      {repeat ? (
        <View style={styles.repeat}>
          <AppText style={styles.repeatTxt} text={'Repeat: '} />
          {/* <View style={styles.repeatCircle}> */}
          <LinearGradient
            style={styles.repeatCircle}
            colors={[COLORS.green, COLORS.primary]}>
            <AppText text={5} style={{fontSize: 10, color: COLORS.white}} />
          </LinearGradient>
        </View>
      ) : null}
      <View style={[styles.trailing]}>
        {/* <AppIconSvg icon={Icons.Alarm} color={COLORS.black} /> */}
        <View style={{paddingHorizontal: 5}}>
          <Image
            source={require('../../../assets/images/azkaar-section/heart.png')}
          />
        </View>
        <View style={{paddingHorizontal: 14}}>
          <Image
            source={require('../../../assets/images/azkaar-section/save-2.png')}
          />
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    borderRadius: 12,
    height: 44,
    width: '100%',
    alignItems: 'center',
  },
  repeat: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  repeatTxt: {
    color: COLORS.primary,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  repeatCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    borderRadius: 10,
    // padd
  },
  trailing: {
    flexDirection: 'row',
  },
});
