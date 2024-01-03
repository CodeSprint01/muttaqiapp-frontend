import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  headerText: string;
  rightIcon?: any;
}

const ScreenHeader: FC<HeaderProps> = ({headerText, rightIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <AppIconSvg
            icon={Icons.ArrowRight}
            width={24}
            height={24}
            color={COLORS.dark_gray}
          />
        </TouchableOpacity>
        <View style={styles.headerTxt}>
          {headerText && <Text style={styles.txt}>{headerText}</Text>}
        </View>
        <View style={styles.rightIcon}>
          {rightIcon && (
            <AppIconSvg
              icon={rightIcon}
              width={24}
              height={24}
              color={COLORS.dark_gray}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
  },
  txt: {
    color: COLORS.very_dark_gray,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  backIcon: {
    width: '15%',
    justifyContent: 'center',
  },
  headerTxt: {
    width: '70%',
  },
  rightIcon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
