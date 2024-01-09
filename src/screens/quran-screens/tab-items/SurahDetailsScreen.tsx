import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import SurahHeader from './SurahHeader';
import AppText from '../../../components/atoms/app-text/AppText';
import {Ayat} from '../../../types/types';
import BottomSheet from '@gorhom/bottom-sheet';

const SurahDetailsScreen = ({route}) => {
  const surahData = route?.params?.data;
  const [isBottomSheetVisibale, setIsBottomSheetVisibale] = useState(false);

  console.log(surahData);
  const handelBottomSeetShow = () => {
    console.log('test');
    setIsBottomSheetVisibale(!isBottomSheetVisibale);
  };
  const renderItem = ({item, index}: {item: Ayat; index: number}) => {
    return (
      <View style={[styles.listView, {marginTop: index === 0 ? 27 : 0}]}>
        <SurahHeader
          ayatNumber={index + 1}
          bookmark={item?.isBookmark ? Icons.Alarm : Icons.EmptyBookmark}
          favourite={item?.isFavourite ? Icons.Adhan : Icons.EmptyHeart}
          playPause={Icons.Play}
          onPressBooksquare={handelBottomSeetShow}
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
        />
      </View>

      <BottomSheet
        snapPoints={['25%', '50%', '75%']}
        isVisible={isBottomSheetVisibale}
        onBackdropPress={() => handelBottomSeetShow}>
        <View>
          <Text>thsi is modal </Text>
        </View>
      </BottomSheet>
    </AppContainer>
  );
};

export default SurahDetailsScreen;

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
});
// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';

// const SurahDetailsScreen = () => {
//   const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

//   useEffect(() => {
//     // Code that depends on isBottomSheetVisible
//   }, [isBottomSheetVisible]);

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Button
//         title="Show Bottom Sheet"
//         onPress={() => setBottomSheetVisible(!isBottomSheetVisible)}
//       />
//       <BottomSheet
//         snapPoints={['25%', '50%', '75%']}
//         isVisible={isBottomSheetVisible}
//         onBackdropPress={() => setBottomSheetVisible(false)}>
//         <Text>jwekgkejhgkkhwevj</Text>
//       </BottomSheet>
//     </View>
//   );
// };

// export default SurahDetailsScreen;
