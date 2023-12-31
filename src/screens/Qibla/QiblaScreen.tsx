import {View, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CompassHeading from 'react-native-compass-heading';
import GetLocation from 'react-native-get-location';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import QiblaScreenHeader from './QiblaScreenHeader';
import AppModal from '../../components/atoms/app-modal/AppModal';
import CompassTemplateModal from './CompassTemplateModal';
import AppContainer from '../../components/atoms/app-container/AppContainer';

const QiblaScreen = () => {
  const [heading, setHeading] = useState({accuracy: 0, heading: 0});
  const [modalVisible, setModalVisible] = useState(false);
  const [userLocation, setUserLocation] = useState({
    latitude: 31.5684198,
    longitude: 74.3261093,
  });
  const [compassName, setCompassName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState({
    compImage: require('../../../assets/images/compass-template/grayCompassHd.png'),
    compassPin: Icons.GrayBlueCompPin,
  });
  let debounceTimout: any;
  // here we get user location
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setUserLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
      });
  }, []);
  // here we select compass template
  const handleCompassSelect = (selectedItem: any) => {
    setCompassName(selectedItem?.name);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      selectedTemplateFun();
    }, 0); // Use a minimal timeout to allow the state to update

    return () => clearTimeout(timerId); // Clear the timeout on component unmount
  }, [compassName]);
  const debounce = (timer: number, degree: any) => {
    clearTimeout(debounceTimout);
    debounceTimout = setTimeout(() => {
      setHeading(degree);
    }, timer);
  };

  // here we get degree or diraction
  useEffect(() => {
    CompassHeading.start(0, (degree: any) => {
      debounce(100, degree);
    });
    return () => {
      CompassHeading.stop();
    };
  }, []);

  // below function calculates user location form A point to B point
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
  const latitude1 = userLocation?.latitude;
  const longitude1 = userLocation?.longitude;
  const latitude2 = 21.42251;
  const longitude2 = 39.826168;
  const bearing = angleFromCoordinate(
    latitude1,
    longitude1,
    latitude2,
    longitude2,
  );
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  // here we give slected compass template png image

  const selectedTemplateFun = () => {
    if (compassName === 'grayCompass') {
      setSelectedTemplate({
        compImage: require('../../../assets/images/compass-template/grayCompassHd.png'),
        compassPin: Icons.GrayBlueCompPin,
      });
    } else if (compassName === 'blueCompass') {
      setSelectedTemplate({
        compImage: require('../../../assets/images/compass-template/blueCompassHd.png'),
        compassPin: Icons.GrayBlueCompPin,
      });
    } else if (compassName === 'goldenCompass') {
      setSelectedTemplate({
        compImage: require('../../../assets/images/compass-template/goldeCompassHd.png'),
        compassPin: Icons.GoldeCompPin,
      });
    } else {
      setSelectedTemplate({
        compImage: require('../../../assets/images/compass-template/blackCompassHd.png'),
        compassPin: Icons.BlackCompPin,
      });
    }
  };

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <QiblaScreenHeader handleThemeClick={handleModalVisible} />
        </View>
        <View style={styles.watchContainer}>
          <View style={{transform: [{rotate: `${360 - heading.heading}deg`}]}}>
            <View>
              <Image
                source={selectedTemplate?.compImage}
                style={styles.compassImage}
              />
            </View>
          </View>
          <View style={styles.niddleContainer}>
            <AppIconSvg
              icon={selectedTemplate.compassPin}
              width={75}
              height={75}
              color={COLORS.light_gray}
            />
          </View>
        </View>
        <View style={styles.bottomTxtContainer}>
          <AppText text={'Turn to your Right'} style={styles.bottomTxt} />
        </View>
        <AppModal
          children={
            <View>
              <CompassTemplateModal onSelectItem={handleCompassSelect} />
            </View>
          }
          isVisible={modalVisible}
          toggleModal={handleModalVisible}
        />
      </View>
    </AppContainer>
  );
};

export default QiblaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
