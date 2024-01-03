import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS} from '../../../styles/color';

interface cardProps {
  onPress?: () => void;
  arabic: string;
  english: string;
  style?: any;
  meaning: string;
  index?: number;
}

const AllahNameCard: FC<cardProps> = ({
  onPress,
  arabic,
  english,
  meaning,
  style,
  index,
}) => {
  return (
    <View
      style={[
        {
          paddingBottom: index === 5 ? 40 : 0,
        },
        styles.imageBackView,
        style,
      ]}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Image
          source={require('../../../../assets/images/explore-images/namesBackImg.png')}
          style={styles.backImg}
        />
        <View style={styles.txtContainer}>
          <AppText text={arabic} style={styles.arabic} />
          <AppText text={english} style={styles.english} />
          <AppText text={meaning} style={styles.description} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllahNameCard;

const styles = StyleSheet.create({
  imageBackView: {
    height: 150,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {width: 14, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    marginVertical: 7,
    backgroundColor: COLORS.pale_mint,
    width: '88%',
    alignSelf: 'center',
  },
  backImg: {
    width: '100%',
    height: 144,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  txtContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    position: 'absolute',
    height: 150,
    width: '100%',
  },
  arabic: {
    fontSize: 30,
    fontWeight: '400',
    color: COLORS.green,
  },
  english: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.green,
  },
  description: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.green,
  },
});
