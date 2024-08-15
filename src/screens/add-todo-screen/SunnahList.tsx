import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import AppCheckBoxTick from '../../components/molecules/app-checkbox/AppCheckBoxTick';

interface SunnahListProps {
  handleAddSunnah: () => void;
  isCheckBox: boolean;
  handleCheckBox: () => void;
  SunnahName: string;
}

const SunnahList: FC<SunnahListProps> = ({
  handleAddSunnah,
  isCheckBox,
  handleCheckBox,
  SunnahName,
}) => {
  return (
    <View style={styles.container}>
      {handleAddSunnah && (
        <View style={styles.headerView}>
          <AppText text={'Sunnah'} style={styles.sunnahTxt} />
          <TouchableOpacity onPress={handleAddSunnah}>
            <AppText text={'+ Add'} style={styles.addTxt} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.listContainer}>
        <AppCheckBoxTick
          color={COLORS.green}
          isChecked={isCheckBox}
          onToggle={handleCheckBox}
        />
        <AppText text={SunnahName} style={styles.txt} />
      </View>
    </View>
  );
};

export default SunnahList;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sunnahTxt: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: fonts.dmSans[500],
    color: COLORS.very_dark_gray,
  },
  txt: {
    color: COLORS.dark_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  addTxt: {
    color: COLORS.green,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  listContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
