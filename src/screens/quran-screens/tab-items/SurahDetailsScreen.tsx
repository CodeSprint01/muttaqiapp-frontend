import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import SurahHeader from './SurahHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {Ayat} from '../../../types/types';
import AppBottomSheet from '../../../components/molecules/app-bottom-sheet/AppBottomSheet';
import AudioPlayer from '../../../components/molecules/audio-player/AudioPlayer';
import TrackPlayer, {
  Capability,
  usePlaybackState,
  State,
  useProgress,
} from 'react-native-track-player';
import BottomSheetOverlapView from '../../../components/molecules/bottom-sheet-overlap/BottomSheetOverlapView';

const SurahDetailsScreen = ({route}) => {
  const surahData = route?.params?.data;
  const [ayatDetails, setAyatDetails] = useState<null | Ayat[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowBoottomSheet, setIsShowBoottomSheet] = useState<boolean>(false);

  const [playerData, setPlayerData] = useState({
    audioIndex: null,
    isPlay: false,
    surahName: '',
    verse: 0,
    playerPlaybackState: '',
  });
  // here is player code
  const playbackState = usePlaybackState();
  var progress = useProgress();

  useEffect(() => {
    setupPlayer();
  }, []);
  console.log(isShowBoottomSheet);

  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SeekTo,
        ],
        capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      });
    } catch (error) {
      console.log('player setup error ', error);
    }
  };
  // console.log(playerData);
  // console.log(playbackState, 'this is player state');
  // setPlayerData(prevState => ({
  //   ...prevState,
  //   playerPlaybackState: playbackState,
  // }));
  // if (playerData.playerPlaybackState === 'playing') {
  //   setIsShowModal(true);
  // }

  const handlePlayerClick = async (item: Ayat, index: number) => {
    if (playerData.audioIndex === index) {
      if (playerData.isPlay === true) {
        await TrackPlayer.pause();
        setPlayerData(prevState => ({...prevState, isPlay: false}));
      } else {
        await TrackPlayer.play();
        setPlayerData(prevState => ({...prevState, isPlay: true}));
      }
      console.log('this is if part of handlePlayerClick');
    } else {
      console.log('this is else part of handlePlayerClick');
      setPlayerData(preState => ({
        ...preState,
        audioIndex: index,
        surahName: item?.surahName,
        verse: item?.verseNo,
        isPlay: true,
      }));
      setIsShowModal(true);
      const playerState = await TrackPlayer.getPlaybackState();
      console.log(playerState, 'player state is here');

      console.log('play pause click', item.audio);
      console.log(playbackState, 'playback state');
      await TrackPlayer.reset();
      try {
        await TrackPlayer.add({
          title: item?.surahName,
          artist: `verse No. ${item?.verseNo}`,
          id: 'track1',
          url: item?.audio,
        });
      } catch (error) {
        console.error('Error setting up TrackPlayer:', error);
      }
      await TrackPlayer.play();
    }
  };
  const playPauseAudio = async () => {
    console.log('pause');
    try {
      if (playerData.isPlay === true) {
        await TrackPlayer.pause();
        setPlayerData(prevState => ({...prevState, isPlay: false}));
      } else {
        await TrackPlayer.play();
        setPlayerData(prevState => ({...prevState, isPlay: true}));
      }
    } catch (error) {
      console.log('this is pause', error);
    }
  };
  const handleCrossPlayer = async () => {
    await TrackPlayer.reset();
    setIsShowModal(false);
    setPlayerData({audioIndex: null, isPlay: false, surahName: '', verse: 0});
  };
  const seekForward = async (value: number) => {
    try {
      while (
        (playbackState as State) === State.Buffering ||
        (playbackState as State) === State.Playing
      ) {
        // Wait for buffering to complete
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      const position = progress.position;
      await TrackPlayer.seekTo(position + value);
    } catch (error) {
      console.error('Error during seekForward:', error);
    }
  };

  // here end player code

  const handleShowBottoomsheet = (item: any) => {
    setIsShowBoottomSheet(!isShowBoottomSheet);
    setAyatDetails(item);
  };
  const DetailsnapPoint = useMemo(() => ['95%', '50%', '75%', '25%'], []);
  const PlayersnapPoint = useMemo(() => ['15%', '15.1%'], []);

  const renderItem = ({item, index}: {item: Ayat; index: number}) => {
    return (
      <View style={[styles.listView, {marginTop: index === 0 ? 27 : 0}]}>
        <SurahHeader
          ayatNumber={index + 1}
          bookmark={item?.isBookmark ? Icons.Alarm : Icons.EmptyBookmark}
          favourite={item?.isFavourite ? Icons.Adhan : Icons.EmptyHeart}
          playPause={
            playerData?.audioIndex === index && playerData.isPlay
              ? Icons.Pause
              : Icons.Play
          }
          onPressBooksquare={() => handleShowBottoomsheet(item)}
          onPressPlayPause={() => handlePlayerClick(item, index)}
        />
        <AppText text={item?.arabic} style={styles.arabicTxt} />
        <AppText text={item?.translation} style={styles.translation} />
      </View>
    );
  };

  return (
    <AppContainer>
      <View style={{paddingHorizontal: 20}}>
        <ScreenHeader headerText="Al-Baqarah" rightIcon={Icons.Search} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={surahData?.ayats}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <BottomSheetOverlapView
        showBottomSheet={isShowBoottomSheet}
        // setShowBottomSheet={() => setIsShowBoottomSheet(false)}
        setShowBottomSheet={isShowBoottomSheet ? handleShowBottoomsheet : null}
        snapPoints={DetailsnapPoint}
        enableHeaderLine>
        <View style={styles.bottomContainer}>
          <AppText text={ayatDetails?.arabic} style={styles.arabicTxt} />
          <AppText
            text={ayatDetails?.details}
            style={[styles.translation, {paddingTop: 36}]}
          />
        </View>
      </BottomSheetOverlapView>
      {isShowModal && (
        <AppBottomSheet
          enableHandlePanningGesture={false}
          snapPoint={PlayersnapPoint}
          children={
            <AudioPlayer
              surahName={playerData?.surahName}
              verse={`Verse no. ${playerData?.verse}`}
              playPauseOnPress={playPauseAudio}
              playerIcon={playerData.isPlay ? Icons.Pause : Icons.Play}
              handleSeekTo={seekForward}
              progressDuration={progress.duration}
              progressPosition={progress.position}
              crossOnPress={handleCrossPlayer}
            />
          }
        />
      )}
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listView: {
    marginBottom: 16,
  },
  arabicTxt: {
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.dark_gray,
    textAlign: 'right',
    paddingTop: 16,
    fontStyle: 'normal',
    lineHeight: 35,
  },
  translation: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.dark_gray,
    fontStyle: 'normal',
    paddingTop: 5,
  },
  bottomContainer: {
    paddingHorizontal: 23,
  },
  playerModalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerModal: {
    justifyContent: 'flex-end',
    marginBottom: 23,
  },
});
export default SurahDetailsScreen;
