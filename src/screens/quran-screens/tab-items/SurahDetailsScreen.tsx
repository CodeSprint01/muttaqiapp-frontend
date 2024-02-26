import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import SurahHeader from './SurahHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {Ayah, Ayat} from '../../../types/types';
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
  console.log(surahData, 'this is surahData');
  const [ayatDetails, setAyatDetails] = useState<Ayah[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [hideTranslation, setHideTranslation] = useState<boolean>(false);
  const [isShowBoottomSheet, setIsShowBoottomSheet] = useState<boolean>(false);

  const [playerData, setPlayerData] = useState<any>({
    audioIndex: null,
    isPlay: false,
    surahName: '',
    verse: 0,
    playerPlaybackState: '',
  });

  const rukuos = surahData?.rukuos;
  console.log(rukuos);

  const handleHideTranslation = () => {
    setHideTranslation(!hideTranslation);
  };
  // here is player code
  const playbackState = usePlaybackState();
  var progress = useProgress();

  // console.log(surahData, 'surahData');

  useEffect(() => {
    setupPlayer();
  }, []);

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

  const handlePlayerClick = async (item: Ayat, index: number) => {
    console.log('play and pause');
    // we take audio from api so i test code it working well i comment below code for future use
    // if (playerData.audioIndex === index) {
    //   if (playerData.isPlay === true) {
    //     await TrackPlayer.pause();
    //     setPlayerData(prevState => ({...prevState, isPlay: false}));
    //   } else {
    //     await TrackPlayer.play();
    //     setPlayerData(prevState => ({...prevState, isPlay: true}));
    //   }
    // } else {
    //   setPlayerData(preState => ({
    //     ...preState,
    //     audioIndex: index,
    //     surahName: item?.surahName,
    //     verse: item?.verseNo,
    //     isPlay: true,
    //   }));
    //   setIsShowModal(true);
    //   await TrackPlayer.reset();
    //   try {
    //     await TrackPlayer.add({
    //       title: item?.surahName,
    //       artist: `verse No. ${item?.verseNo}`,
    //       id: 'track1',
    //       url: item?.audio,
    //     });
    //   } catch (error) {
    //     console.error('Error setting up TrackPlayer:', error);
    //   }
    //   await TrackPlayer.play();
    // }
  };
  const playPauseAudio = async () => {
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
  const DetailsnapPoint = useMemo(() => ['95%', '96%', '77%'], []);
  const PlayersnapPoint = useMemo(() => ['16%', '16.01%'], []);

  const renderItem = ({item, index}: {item: Ayah; index: number}) => {
    return (
      <View style={[styles.listView, {marginTop: index === 0 ? 23 : 0}]}>
        <SurahHeader
          ayatNumber={index + 1}
          bookmark={Icons.EmptyBookmark}
          favourite={Icons.EmptyHeart}
          playPause={
            playerData?.audioIndex === index && playerData.isPlay
              ? Icons.Pause
              : Icons.Play
          }
          onPressBooksquare={() => handleShowBottoomsheet(item)}
          onPressPlayPause={() => handlePlayerClick(item, index)}
        />
        <Text style={styles.arabicTxt}>{item?.text}</Text>
        <AppText text={item?.enText} style={styles.translation} />
      </View>
    );
  };

  return (
    <AppContainer>
      <View style={{paddingHorizontal: 20}}>
        <ScreenHeader headerText="Al-Baqarah" rightIcon={Icons.Search} />
      </View>
      <View style={styles.container}>
        <View style={styles.hideShowTrans}>
          <TouchableOpacity activeOpacity={0.5} onPress={handleHideTranslation}>
            <AppText
              text={hideTranslation ? 'Show translation' : 'Hide translation'}
              style={styles.hideShowTxt}
            />
          </TouchableOpacity>
          <View style={styles.eyeIcon}>
            <AppIconSvg
              icon={hideTranslation ? Icons.EyeSlash : Icons.Eye}
              width={24}
              height={24}
              color="black"
            />
          </View>
        </View>

        {hideTranslation ? (
          <View style={{marginTop: 10}}>
            <SurahHeader
              bookmark={Icons.EmptyBookmark}
              favourite={Icons.EmptyHeart}
              playPause={Icons.Play}
              onPressBooksquare={() => console.log('onPressBooksquare')}
              onPressPlayPause={() => console.log('onPressPlayPause')}
            />
            <View style={{}}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 170}}>
                <View style={{}}>
                  <Text
                    style={{fontSize: 24, textAlign: 'right', marginTop: 10}}>
                    {surahData?.ayahs?.map((item: Ayah, index: number) => (
                      <>
                        <Text
                          key={index}
                          onLongPress={() => Alert.alert(item?.enText)}
                          style={{
                            marginRight: 10,
                            lineHeight: 40,
                            fontFamily: 'Arabic',
                            fontSize: 30,
                          }}>
                          {`${item.text} (${item.number}) `}
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                          {rukuos.map(itm =>
                            itm === item.number ? (
                              <Text
                                style={{
                                  backgroundColor: 'pink',
                                }}>{`\n (${item.ruku}ع) \n`}</Text>
                            ) : null,
                          )}
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                          {item?.sajda ? `\n (سَجْدَہ) \n` : null}
                        </Text>
                      </>
                    ))}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        ) : (
          <FlatList
            data={surahData?.ayahs}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => item?.text.toString()}
          />
        )}
      </View>
      <BottomSheetOverlapView
        showBottomSheet={isShowBoottomSheet}
        setShowBottomSheet={isShowBoottomSheet ? handleShowBottoomsheet : null}
        snapPoints={DetailsnapPoint}
        enableHeaderLine>
        <View style={styles.bottomContainer}>
          <AppText text={ayatDetails?.text} style={styles.arabicTxt} />
          <AppText
            text={ayatDetails?.enText}
            style={[styles.translation, {paddingTop: 36}]}
          />
        </View>
      </BottomSheetOverlapView>
      <View>
        <BottomSheetOverlapView
          showBottomSheet={isShowModal}
          setShowBottomSheet={handleCrossPlayer}
          snapPoints={PlayersnapPoint}
          enableHeaderLine={false}>
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
        </BottomSheetOverlapView>
      </View>
    </AppContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  listView: {
    marginBottom: 16,
  },
  hideShowTrans: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    marginTop: 20,
  },
  hideShowTxt: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    textDecorationLine: 'underline',
    fontStyle: 'normal',
    paddingRight: 18,
    justifyContent: 'center',
  },
  eyeIcon: {
    paddingTop: 3,
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
