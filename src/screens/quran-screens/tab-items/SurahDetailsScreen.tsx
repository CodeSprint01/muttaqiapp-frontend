import {
  FlatList,
  Image,
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
        <AppText text={item?.text} style={styles.arabicTxt} />
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
            <ScrollView>
              <View>
                <Text style={{fontSize: 24, textAlign: 'right', marginTop: 10}}>
                  {surahData?.ayahs?.map((item, index) => (
                    <Text
                      key={index}
                      onPress={() => console.log(index)}
                      style={{marginRight: 10}}>
                      {`${item.text} (${item.sajda ? 'ع' : item.number}) `}
                    </Text>
                  ))}
                </Text>
              </View>
            </ScrollView>
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
    paddingHorizontal: 20,
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
// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';

// const SurahDetailsScreen = () => {
//   const verses = [
//     {
//       number: 8,
//       numberInSurah: 1,
//       text: 'بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ الۤمۤ',
//       enText: 'Alif. Lam. Mim.',
//       manzil: 1,
//       ruku: 2,
//       sajda: false,
//     },
//     {
//       number: 9,
//       numberInSurah: 2,
//       text: 'ذَ ٰ⁠لِكَ ٱلۡكِتَـٰبُ لَا رَیۡبَۛ فِیهِۛ هُدࣰى لِّلۡمُتَّقِینَ',
//       enText:
//         'THIS DIVINE WRIT - let there be no doubt about it is [meant to be] a guidance for all the God-conscious.',
//       manzil: 1,
//       ruku: 2,
//       sajda: false,
//     },
//     {
//       number: 8,
//       numberInSurah: 1,
//       text: 'ذَ ٰ⁠لِكَ ٱلۡكِتَـٰبُ لَا رَیۡبَۛ فِیهِۛ هُدࣰى لِّلۡمُتَّقِینَ',
//       enText: 'Alif. Lam. Mim.',
//       manzil: 1,
//       ruku: 2,
//       sajda: false,
//     },
//     {
//       number: 9,
//       numberInSurah: 2,
//       text: 'ذَ ٰ⁠لِكَ ٱلۡكِتَـٰبُ لَا رَیۡبَۛ فِیهِۛ هُدࣰى لِّلۡمُتَّقِینَ',
//       enText:
//         'THIS DIVINE WRIT - let there be no doubt about it is [meant to be] a guidance for all the God-conscious.',
//       manzil: 1,
//       ruku: 2,
//       sajda: false,
//     },
//     // Add more verses here if needed
//   ];

//   return (
//     // <View style={{marginTop: 100}}>
//     //   {verses.map((verse, index) => (
//     //     <View key={index} style={styles.verseContainer}>
//     //       <Text style={styles.text}>{'(' + verse?.number + ')'}</Text>
//     //       <Text style={[styles.text, {paddingLeft: 10, fontSize: 20}]}>
//     //         {verse?.text}
//     //       </Text>
//     //     </View>
//     //   ))}
//     // </View>
//     // <View style={{marginTop: 100}}>
//     //   <Text
//     //     onPress={() => console.log()}
//     //     style={{fontSize: 24, textAlign: 'right', marginTop: 10}}>
//     //     {verses?.map((verse , index) => `${verse.text}  (${verse.number})`).join(' ')}
//     //   </Text>
//     // </View>
//     <View style={{marginTop: 100}}>
//       <Text style={{fontSize: 24, textAlign: 'right', marginTop: 10}}>
//         {verses?.map((verse, index) => (
//           <Text
//             key={index}
//             onPress={() => console.log(index)}
//             style={{marginRight: 10}}>
//             {`${verse.text} (${verse.number})`}
//           </Text>
//         ))}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   verseContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     alignSelf: 'flex-end',
//     backgroundColor: 'pink',
//   },
//   text: {
//     textAlign: 'right',
//     fontSize: 34,
//     color: 'red',
//   },
//   image: {
//     width: 30, // Adjust image width as needed
//     height: 30, // Adjust image height as needed
//   },
// });

// export default SurahDetailsScreen;
