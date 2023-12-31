import {
  StyleSheet,
  View,
  ImageSourcePropType,
  TextInputProps,
} from 'react-native';
import React, {FC, useState} from 'react';
import {COLORS} from '../../../styles/color';
import {SelectList} from 'react-native-dropdown-select-list';
import {keyValue} from '../../../types/keyVlaue';

interface MyProps {
  arrayData: Array<{label: string; value: string}>;
  placeholderText: string;
  ImageName?: ImageSourcePropType;
  imageWidth?: number;
  imageHeight?: number;
}

type PropsWithImage = MyProps &
  (MyProps['ImageName'] extends ImageSourcePropType
    ? {
        imageWidth: number;
        imageHeight: number;
      }
    : {});
const AppInputDropDown: FC<PropsWithImage & TextInputProps> = ({
  arrayData,
  placeholderText,
  ImageName,
  imageWidth = 24,
  imageHeight = 24,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View>
      <SelectList
        setSelected={(val: keyValue) => setSelectedItem(val)}
        data={arrayData}
        save="value"
        search={false}
        arrowicon={<ImageName width={imageWidth} height={imageHeight} />}
        placeholder={placeholderText}
        dropdownTextStyles={styles.dropdownTextSty}
        boxStyles={styles.boxSty}
        inputStyles={styles.inputSty}
        dropdownStyles={styles.dropdownsty}
      />
    </View>
  );
};
export default AppInputDropDown;

const styles = StyleSheet.create({
  dropdownTextSty: {
    color: 'lightBlack',
  },
  boxSty: {
    borderColor: COLORS.tertiary,
    borderWidth: 1,
    height: 47,
  },
  txtSty: {
    fontSize: 12,
    lineHeight: 12.64,
    fontWeight: '400',
    color: COLORS.lightBlack,
    marginHorizontal: 5,
  },
  inputSty: {
    color: COLORS.quaternary,
    fontSize: 12,
    paddingTop: 3,
  },
  dropdownsty: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    elevation: 2,
    shadowColor: 'lightBlack',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 9,
  },
});
