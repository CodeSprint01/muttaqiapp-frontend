import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import CompassHeading from 'react-native-compass-heading';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import {COLORS} from '../../styles/color';

const QiblaScreen = () => {
  const [heading, setHeading] = useState({accuracy: 0, heading: 261});
  console.log(heading);

  // useEffect(() => {
  //   CompassHeading.start(0, degree => {
  //     setHeading(degree);
  //     // console.log('useeffect call');
  //   });
  //   return () => {
  //     CompassHeading.stop();
  //   };
  // }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Compass Heading: {JSON.stringify(heading)}</Text>
      <View style={{transform: [{rotate: `${360 - heading.heading}deg`}]}}>
        {/* <View>
          <AppIconSvg
            icon={Icons.CompassGray}
            width={200}
            height={200}
            color={COLORS.primary}
          />
        </View> */}
        <View>
          <Image
            source={require('../../../assets/images/testQibla.png')}
            style={{width: 200, height: 200}}
          />
        </View>
      </View>
      {/* <View style={{position: 'absolute'}}>
        <AppIconSvg
          icon={Icons.CompassPin}
          width={70}
          height={70}
          color={COLORS.primary}
        />
      </View> */}
      {/* <View style={{position:"absolute"}}>
        <AppIconSvg
          icon={Icons.CompassPin}
          width={70}
          height={70}
          color={COLORS.primary}
        />
      </View> */}
    </View>
  );
};

export default QiblaScreen;
