import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import {AppIconSvg} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';
interface cardProps {
  icon: string;
  text: string;
}

const DiscoverCard: FC<cardProps> = ({icon, text}) => {
  return (
    <View>
      <View style={styles.container}>
        <AppIconSvg
          icon={icon}
          width={42}
          height={42}
          color={COLORS.lightBlack}
        />
      </View>
      <AppText text={text} style={styles.txt} />
    </View>
  );
};

export default DiscoverCard;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.light_blue,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
  },
});
