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
import {useNavigation} from '@react-navigation/native';
import {ReligiousContent} from '../../../types/types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';

interface cardProps {
  data: ReligiousContent;
  category: string;
}
const AzkaarCard: FC<cardProps> = ({data, category}) => {
  const backgroundImg = require('../../../../assets/images/explore-images/namesBackImg.png');
  const night = require('../../../../assets/images/azkaar-section/nightIcon.png');
  // const night = Icons.Night;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('HomeStack', {
          screen: 'detail-screen',
          params: {
            data,
            category,
          },
        })
      }>
      <Image
        style={[styles.background]}
        source={backgroundImg}
        resizeMode="cover"
      />
      <View style={styles.column}>
        <Image source={night} resizeMode="cover" />
        {/* <AppIconSvg
          color={COLORS.primary}
          icon={Icons.Night}
          height={30}
          width={30}
        /> */}
        <View>
          <AppText style={styles.name} text={data.title}></AppText>
          <AppText style={styles.time} text={data.subTitle}></AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AzkaarCard;

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
    shadowOffset: {width: 3, height: 4},
    shadowColor: COLORS.black,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    // opacity: 0.6,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
  },
  time: {
    paddingTop: 3,
    fontWeight: '500',
    color: COLORS.primary,
  },

  column: {
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
    padding: 20,
    opacity: 1,
    position: 'absolute',
    // backgroundColor: 'red'
  },
  icon: {
    padding: 10,
  },
  // text: {
  //   justifyContent: 'flex-end',
  //   flex: 2,
  //   paddingTop: 10,
  // },
});
