import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS} from '../../styles/color';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';

interface headerProps {
  handleThemeClick: () => void;
}

const QiblaScreenHeader: FC<headerProps> = ({handleThemeClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <View style={styles.locationAndPin}>
            <AppText text={'Location'} style={styles.locationTxt} />
            <View style={styles.locationPin}>
              <AppIconSvg
                icon={Icons.LocationPin}
                width={14}
                height={14}
                color={COLORS.light_blue}
              />
            </View>
          </View>
          <View style={styles.locationBtnContainer}>
            <AppText text={'Karachi'} style={styles.cityName} />
          </View>
        </View>
        <View style={styles.theme}>
          <View style={styles.imageBox}>
            <View style={styles.themeImage}>
              <TouchableOpacity onPress={handleThemeClick} activeOpacity={0.5}>
                <AppIconSvg
                  width={42}
                  height={33}
                  icon={Icons.ThemeChange}
                  color={COLORS.light_blue}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QiblaScreenHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  locationContainer: {
    flex: 1,
  },
  locationAndPin: {
    flexDirection: 'row',
    marginTop: 30,
  },
  locationTxt: {
    fontSize: 16,
    color: COLORS.black,
    marginLeft: 52,
    marginRight: 9,
  },
  locationPin: {
    marginTop: 6,
  },
  theme: {
    flex: 1,
  },
  imageBox: {
    width: 69,
    height: 69,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    position: 'absolute',
    top: 29,
    right: 18,
  },
  themeImage: {
    paddingTop: 18,
    marginLeft: 13,
  },
  locationBtnContainer: {
    width: 150,
    height: 38,
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 20,
  },
});
