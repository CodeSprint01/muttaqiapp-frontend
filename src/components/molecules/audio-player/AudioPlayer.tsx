import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';

interface PlayerProops {
  crossOnPress: () => void;
  playPauseOnPress: () => void;
  surahName: string;
  verse: string;
  playerIcon: string;
  progressDuration: number;
  progressPosition: number;
  handleSeekTo: (value: number) => void;
}
const AudioPlayer: FC<PlayerProops> = ({
  crossOnPress,
  playPauseOnPress,
  surahName,
  verse,
  playerIcon,
  progressDuration,
  progressPosition,
  handleSeekTo,
}) => {
  return (
    <LinearGradient colors={['#1290A1', '#1DA28F']} style={styles.container}>
      <View style={styles.buttonCont}>
        <TouchableOpacity onPress={playPauseOnPress} style={styles.icon}>
          <AppIconSvg icon={playerIcon} width={24} height={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={{width: '65%'}}>
        <View style={styles.detailsContainer}>
          <AppText text={surahName} style={styles.surahName} />
          <AppText text={verse} style={styles.verse} />
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={{
              width: '100%',
              height: 40,
            }}
            minimumValue={0}
            maximumValue={progressDuration}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
            value={progressPosition}
            thumbTintColor="orange"
            onValueChange={handleSeekTo}
          />
        </View>
      </View>
      <TouchableOpacity onPress={crossOnPress} style={styles.cross}>
        <AppIconSvg icon={Icons.Cross} width={45} height={45} color="gray" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    width: '92%',
    alignSelf: 'center',
    borderRadius: 22,
  },
  buttonCont: {
    width: '22%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: COLORS.pale_mint,
    justifyContent: 'center',
    alignItems: 'center',
  },
  surahName: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.pale_mint,
    paddingTop: 7,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  verse: {
    paddingTop: 10,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.pale_mint,
    paddingLeft: 5,
  },
  sliderContainer: {
    // flexDirection: 'column',
    // backgroundColor: 'pink',
  },
  cross: {
    position: 'absolute',
    right: 5,
    top: 20,
  },
});
