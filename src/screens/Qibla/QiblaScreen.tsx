import {View, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CompassHeading from 'react-native-compass-heading';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import QiblaScreenHeader from './QiblaScreenHeader';
import AppModal from '../../components/atoms/app-modal/AppModal';

const QiblaScreen = () => {
  const [heading, setHeading] = useState({accuracy: 0, heading: 0});

  useEffect(() => {
    CompassHeading.start(0, (degree: any) => {
      setHeading(degree);
    });
    return () => {
      CompassHeading.stop();
    };
  }, []);

  function angleFromCoordinate(
    latitude1: number,
    longitude1: number,
    latitude2: number,
    longitude2: number,
  ): number {
    const dLon = (longitude2 - longitude1) * (Math.PI / 180);
    latitude1 = latitude1 * (Math.PI / 180);
    latitude2 = latitude2 * (Math.PI / 180);

    const y = Math.sin(dLon) * Math.cos(latitude2);
    const x =
      Math.cos(latitude1) * Math.sin(latitude2) -
      Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(dLon);

    let brng = Math.atan2(y, x);
    brng = ((brng * 180) / Math.PI + 360) % 360;
    brng = 360 - brng;

    return brng;
  }
  const latitude1 = 74.326119;
  const longitude1 = 31.568435;
  const latitude2 = 21.422487;
  const longitude2 = 39.826206;

  const bearing = angleFromCoordinate(
    latitude1,
    longitude1,
    latitude2,
    longitude2,
  );
  console.log('Bearing:', bearing);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <QiblaScreenHeader
          handleThemeClick={() => console.log('theme click')}
        />
      </View>
      <View style={styles.watchContainer}>
        <View style={{transform: [{rotate: `${360 - heading.heading}deg`}]}}>
          <View>
            <Image
              source={require('../../../assets/images/qiblaGrayTheme.png')}
              style={styles.compassImage}
            />
          </View>
        </View>
        <View style={styles.niddleContainer}>
          <AppIconSvg
            icon={Icons.CompassGrayPin}
            width={75}
            height={75}
            color={COLORS.light_gray}
          />
        </View>
      </View>
      <View style={styles.bottomTxtContainer}>
        <AppText text={'Turn to your Right'} style={styles.bottomTxt} />
      </View>
      <AppModal children={'gg'} />
    </View>
  );
};

export default QiblaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  watchContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  compassImage: {
    width: 312,
    height: 312,
  },
  niddleContainer: {
    position: 'absolute',
  },
  bottomTxtContainer: {
    flex: 1,
  },
  bottomTxt: {
    fontSize: 16,
    color: COLORS.lightBlack,
    textAlign: 'center',
  },
});
