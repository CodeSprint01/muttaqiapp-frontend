import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../app-text/AppText';
import {AppIconSvg} from '../app-icon-svg';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export interface ExploreProps {
  image: any;
  title: string;
  subTitle: string;
  index?: number;
  routeName: string;
}

const ExploreCard: FC<ExploreProps> = ({
  image,
  title,
  subTitle,
  index = 0,
  routeName,
}) => {
  const navigation = useNavigation();
  const navigateFromCard = (category: string) => {
    switch (category.toLowerCase()) {
      case 'azkaar':
        navigation.navigate('HomeStack', {
          screen: routeName,
          params: {
            title: category,
          },
        });
        break;
      case 'dua':
        navigation.navigate('HomeStack', {
          screen: routeName,
          params: {
            title: category,
          },
        });
        break;
      case 'hadith':
        navigation.navigate('HomeStack', {
          screen: routeName,
          params: {
            title: category,
          },
        });
        break;
      default:
        navigation.navigate('HomeStack', {screen: routeName});
        break;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigateFromCard(title)}>
      <View
        style={[
          styles.container,
          {marginLeft: index === 0 ? 12 : 0, marginRight: index === 6 ? 12 : 0},
        ]}>
        <LinearGradient colors={['#1290A1', '#1DA28F']} style={styles.card}>
          <View style={styles.cardIcon}>
            <AppIconSvg icon={image} width={50} height={50} color={'black'} />
            <View style={styles.blurView} />
          </View>
          <AppText text={title} style={styles.cardFirstTxt} />
          <AppText text={subTitle} style={styles.cardSecondTxt} />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },
  card: {
    width: 130,
    // backgroundColor: '#afe1af',
    borderRadius: 20,
    marginTop: 20,
    elevation: 10,
    marginHorizontal: 8,
    height: 175,
  },
  cardIcon: {
    marginTop: 10,
    marginLeft: 20,
    position: 'absolute',
  },
  cardFirstTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    marginTop: 90,
    marginLeft: 20,
  },
  blurView: {
    width: 50,
    height: 25,
    backgroundColor: 'black',
    marginTop: 5,
    opacity: 0.02,
    borderRadius: 100,
  },
  cardSecondTxt: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
    paddingTop: 5,
    marginLeft: 20,
    paddingBottom: 20,
  },
});
