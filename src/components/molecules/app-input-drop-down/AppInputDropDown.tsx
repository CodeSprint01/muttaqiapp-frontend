import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {SelectList} from 'react-native-dropdown-select-list';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import AppText from '../../atoms/app-text/AppText';

interface MyProps {
  arrayData: Array<{label: string; value: string}>;
  placeholderText?: string;
  inputLabel: string;
  icon?: any;
  isRequired: boolean;
  handleSelectValue: (val: string) => void;
}

const AppInputDropDown: FC<MyProps> = ({
  arrayData,
  placeholderText,
  inputLabel,
  isRequired = false,
  handleSelectValue,
  icon,
  ...props
}) => {
  return (
    <View>
      <View style={styles.headerTxt}>
        <AppText text={inputLabel} style={styles.inputTxt} />
        {isRequired && <AppText text={' *'} style={styles.requireDot} />}
      </View>
      <SelectList
        setSelected={(val: string) => handleSelectValue(val)}
        data={arrayData}
        save="value"
        search={false}
        arrowicon={
          <AppIconSvg
            icon={Icons.DropDown}
            width={24}
            height={24}
            color="black"
          />
        }
        closeicon={
          <AppIconSvg
            icon={Icons.DropUp}
            width={24}
            height={24}
            color="black"
          />
        }
        placeholder={placeholderText}
        dropdownTextStyles={styles.dropdownTextSty}
        boxStyles={styles.boxSty}
        inputStyles={styles.inputSty}
        dropdownStyles={styles.dropdownsty}
        {...props}
      />
      <View style={styles.verticalLine} />
    </View>
  );
};
export default AppInputDropDown;

const styles = StyleSheet.create({
  dropdownTextSty: {
    color: COLORS.light_gray,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  boxSty: {
    height: 47,
    borderColor: COLORS.pale_mint,
  },
  txtSty: {
    fontSize: 12,
    lineHeight: 12.64,
    fontWeight: '400',
    color: COLORS.lightBlack,
    marginHorizontal: 5,
  },
  inputSty: {
    color: COLORS.light_gray,
    fontSize: 16,
    marginLeft: -20,
    fontFamily: fonts.dmSans[500],
  },
  dropdownsty: {
    backgroundColor: COLORS.pale_mint,
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: COLORS.pale_mint,
  },
  verticalLine: {
    width: '100%',
    paddingVertical: 0.5,
    backgroundColor: COLORS.pale_aqua,
  },
  headerTxt: {
    flexDirection: 'row',
  },
  inputTxt: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
    fontStyle: 'normal',
    paddingLeft: 3,
  },
  requireDot: {
    fontSize: 14,
    fontFamily: fonts.dmSans[500],
    color: COLORS.crimson,
    fontStyle: 'normal',
  },
});
