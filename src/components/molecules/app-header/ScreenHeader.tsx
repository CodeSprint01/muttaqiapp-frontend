import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS} from '../../../styles/color';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  headerText?: string;
  rightIcon?: any;
  extraStyle?: StyleProp<ViewProps> | any;
}

const ScreenHeader: FC<HeaderProps> = ({headerText, rightIcon, extraStyle}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, extraStyle]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <AppIconSvg
            icon={Icons.ArrowLeft}
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
    // paddingVertical: 15,
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
