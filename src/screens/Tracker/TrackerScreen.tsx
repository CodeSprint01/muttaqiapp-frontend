import React, {useState, useEffect} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {
  magnetometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import LPF from 'lpf';

const {height, width} = Dimensions.get('window');

const TrackerScreen = () => {
  const [magnetometerValue, setMagnetometerValue] = useState('0');

  const _degree = magnetometer => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };
  // const isMagnetometerAvailable = () => {
  //   return magnetometer
  //     .isAvailable()
  //     .then(() => true)
  //     .catch(() => false);
  // };

  // Call this function and log the result to check if the magnetometer is available.
  // isMagnetometerAvailable().then(result =>
  //   console.log('Magnetometer available:', result),
  // );

  useEffect(() => {
    LPF.init([]);
    LPF.smoothing = 0.2;

    const toggle = () => {
      if (subscription) {
        unsubscribe();
      } else {
        subscribe();
      }
    };

    const subscribe = async () => {
      setUpdateIntervalForType(SensorTypes.magnetometer, 16);
      setSubscription(
        magnetometer.subscribe(
          sensorData => setMagnetometerValue(_angle(sensorData)),
          error => console.log('The sensor is not available'),
        ),
      );
    };

    const unsubscribe = () => {
      subscription && subscription.unsubscribe();
      setSubscription(null);
    };

    const _angle = magnetometer => {
      let angle = 0;
      if (magnetometer) {
        let {x, y} = magnetometer;
        if (Math.atan2(y, x) >= 0) {
          angle = Math.atan2(y, x) * (180 / Math.PI);
        } else {
          angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
        }
      }
      return Math.round(LPF.next(angle));
    };

    const _direction = degree => {
      if (degree >= 22.5 && degree < 67.5) {
        return 'NE';
      } else if (degree >= 67.5 && degree < 112.5) {
        return 'E';
      } else if (degree >= 112.5 && degree < 157.5) {
        return 'SE';
      } else if (degree >= 157.5 && degree < 202.5) {
        return 'S';
      } else if (degree >= 202.5 && degree < 247.5) {
        return 'SW';
      } else if (degree >= 247.5 && degree < 292.5) {
        return 'W';
      } else if (degree >= 292.5 && degree < 337.5) {
        return 'NW';
      } else {
        return 'N';
      }
    };

    const setSubscription = subscribe;

    return () => unsubscribe();
  }, []);

  return (
    <Grid style={{backgroundColor: 'lightBlack'}}>
      <Row style={{alignItems: 'center'}} size={0.9}>
        <Col style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: height / 26,
              fontWeight: 'bold',
            }}>
            {magnetometerValue}
          </Text>
        </Col>
      </Row>

      <Row style={{alignItems: 'center'}} size={0.1}>
        <Col style={{alignItems: 'center'}}>
          <View style={{width: width, alignItems: 'center', bottom: 0}}>
            {/* <Image
              source={require('../../../assets/images/compass_pointer.png')}
              style={{
                height: height / 26,
                resizeMode: 'contain',
              }}
            /> */}
          </View>
        </Col>
      </Row>

      <Row style={{alignItems: 'center'}} size={2}>
        <Text
          style={{
            color: '#fff',
            fontSize: height / 27,
            width: width,
            position: 'absolute',
            textAlign: 'center',
          }}>
          {_degree(magnetometerValue)}°
        </Text>

        <Col style={{alignItems: 'center'}}>
          {/* <Image
            source={require('../../../assets/images/compass_bg.png')}
            style={{
              height: width - 80,
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              transform: [{rotate: 360 - magnetometerValue + 'deg'}],
            }}
          /> */}
        </Col>
      </Row>

      <Row style={{alignItems: 'center'}} size={1}>
        <Col style={{alignItems: 'center'}}>
          <Text style={{color: '#fff'}}>Copyright @RahulHaque</Text>
        </Col>
      </Row>
    </Grid>
  );
};

export default TrackerScreen;
