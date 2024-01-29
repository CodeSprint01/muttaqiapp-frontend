import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import AppText from '../../atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
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
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // convert seconds to  hours min sec
  function secondsToHMS(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return {
      hours,
      minutes,
      seconds: remainingSeconds,
    };
  }
  var totalDuration = secondsToHMS(progressDuration);
  console.log(totalDuration.hours, 'total du');

  useEffect(() => {
    const timeObject = secondsToHMS(progressPosition);
    setCurrentTime(preValue => ({
      ...preValue,
      hours: timeObject?.hours,
      minutes: timeObject?.minutes,
      seconds: timeObject?.seconds,
    }));
    console.log(timeObject, 'jj');
  }, [progressPosition]);
  console.log(currentTime, 'jj');

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
              height: 30,
            }}
            minimumValue={0}
            maximumValue={progressDuration}
            minimumTrackTintColor="white"
            maximumTrackTintColor={COLORS.light_gray}
            value={progressPosition}
            thumbTintColor="white"
            onValueChange={handleSeekTo}
          />
        </View>
        <View style={styles.sliderTime}>
          <AppText
            style={styles.audioTime}
            text={`${currentTime?.hours}:${
              currentTime?.minutes
            }:${currentTime?.seconds.toFixed(0)}`}
          />
          <AppText
            style={styles.audioTime}
            text={`${totalDuration.hours}:${
              totalDuration.minutes
            }:${totalDuration.seconds.toFixed(0)}`}
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
    width: '100%',
    alignSelf: 'center',
    borderRadius: 22,
    marginTop: 0,
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
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
    color: COLORS.pale_mint,
    paddingTop: 14,
  },
  detailsContainer: {},
  verse: {
    fontSize: 12,
    fontFamily: fonts.dmSans[400],
    color: COLORS.pale_mint,
  },
  sliderContainer: {
    marginLeft: Platform.OS === 'android' ? -15 : -3,
  },
  cross: {
    position: 'absolute',
    right: 5,
    top: 30,
  },
  sliderTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: Platform.OS === 'android' ? 13 : 0,
  },
  audioTime: {
    fontSize: 10,
    color: COLORS.white,
    fontFamily: fonts.dmSans[400],
    paddingBottom: 10,
  },
});
