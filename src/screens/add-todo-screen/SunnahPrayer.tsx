import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useMemo, useState} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import BottomSheetOverlapView from '../../components/molecules/bottom-sheet-overlap/BottomSheetOverlapView';
import AppInput from '../../components/molecules/app-input/AppInput';
import AppButton from '../../components/molecules/app-button/AppButton';
import {useDispatch} from 'react-redux';
import {addSunnahPrayer} from '../../redux/prayer/action';
import AppCheckBoxTick from '../../components/molecules/app-checkbox/AppCheckBoxTick';
import {SunnahInterface} from '../../types/types';

interface SunnahProps {
  sunnahData: SunnahInterface;
  onToggleSunnah: (id: number) => void;
  onPressDelete: (id: number) => void;
}

const SunnahPrayer: FC<SunnahProps> = ({
  sunnahData,
  onToggleSunnah,
  onPressDelete,
}) => {
  const initialState = {
    name: '',
    isRead: false,
    rakats: 0,
  };
  const [prayers, setPrayer] = useState(initialState);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
  const handleOnChanges = (key: string, value: string) => {
    setPrayer(preVal => ({...preVal, [key]: value}));
  };
  const onPressAdd = () => {
    console.log('sss');
    setIsVisible(true);
  };
  const validation = prayers?.name === '' || prayers?.rakats == 0;
  const onPressAddSunnah = () => {
    if (!validation) {
      dispatch(addSunnahPrayer(prayers));
    } else {
      Alert.alert('Alert', 'Please fill all fields');
    }
  };

  const snapPoint = useMemo(() => ['90%', '91%', '92%'], []);
  console.log(prayers);
  const renderItem = ({
    item,
    index,
  }: {
    item: SunnahInterface;
    index: number;
  }) => {
    console.log(item?.name);

    return (
      <View style={styles.sunnahList}>
        <AppCheckBoxTick
          label={`${item?.name}  (${item?.rakats})`}
          isChecked={item?.isRead}
          onToggle={() => onToggleSunnah(item?.id)}
        />
        <TouchableOpacity onPress={() => onPressDelete(item?.id)}>
          <AppIconSvg icon={Icons.Delete} width={25} height={25} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText
          text={'Sunnah'}
          style={styles.label}
          onPress={() => console.log('ff')}
        />
        <AppText text={'+ Add'} style={styles.addBtn} onPress={onPressAdd} />
      </View>
      <View>
        <FlatList
          data={sunnahData}
          renderItem={renderItem}
          keyExtractor={(_item, index) => index.toString()}
        />
      </View>
      <BottomSheetOverlapView
        showBottomSheet={isVisible}
        enableHeaderLine
        setShowBottomSheet={() => setIsVisible(false)}
        snapPoints={snapPoint}
        children={
          <View>
            <AppText text={'Add sunnah prayer'} style={styles.formLabel} />
            <AppInput
              placeholder="Enter sunnah prayer name"
              handleInputChange={val => handleOnChanges('name', val)}
              inputValue={prayers?.name}
            />
            <AppInput
              placeholder="Enter sunnah prayer Rakats"
              style={styles.input}
              handleInputChange={val => handleOnChanges('rakats', val)}
              inputValue={prayers?.rakats}
              keyboardType="numeric"
            />
            <View style={styles.addSunnah}>
              <AppButton buttonText="Add" onPress={onPressAddSunnah} />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default SunnahPrayer;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: COLORS.medium_gray,
    fontFamily: fonts.dmSans[600],
  },
  addBtn: {
    color: COLORS.green,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  input: {
    marginTop: 20,
  },
  addSunnah: {
    marginTop: 20,
  },
  formLabel: {
    fontSize: 20,
    fontFamily: fonts.dmSans[600],
    color: COLORS.green,
    textAlign: 'center',
  },
  sunnahList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
});
