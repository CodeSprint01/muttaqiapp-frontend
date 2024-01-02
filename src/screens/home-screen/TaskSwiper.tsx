import React, {FC} from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewComponent,
} from 'react-native';
import {CircularProgress} from 'react-native-circular-progress';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import AppCheckBox from '../../components/molecules/app-checkbox/AppCheckBox';

interface TaskProps {
  circleValue: any;
  handleCheckboxChange: any;
  checkboxes: {id: number; label: string; isChecked: boolean}[];
}

const TaskSwiper: FC<TaskProps> = ({
  circleValue,
  handleCheckboxChange,
  checkboxes,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircularProgress
          size={100}
          width={17}
          fill={circleValue}
          tintColor={COLORS.green}
          backgroundColor={COLORS.Light_Steel_Blue}
          rotation={20}
          style={{borderRadius: 20}}
        />
        <Text style={styles.circleValue}>{`${circleValue}%`}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.taskAndValue}>
          <AppText text={'Your tasks'} />
          <View style={styles.taskAndIccon}>
            <AppText text={'2/8'} style={styles.dailyProgress} />
            <AppIconSvg
              icon={Icons.OpenDetails}
              width={16}
              height={16}
              color={COLORS.green}
            />
          </View>
        </View>
        <View style={styles.flatlistView}>
          <FlatList
            data={checkboxes}
            renderItem={({item}) => (
              <AppCheckBox
                isChecked={item.isChecked}
                onToggle={() => handleCheckboxChange(item.id)}
                label={item.label}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default TaskSwiper;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 165,
    backgroundColor: COLORS.Light_Powder_Blue,
    borderRadius: 22,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
  },
  circleContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleValue: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  taskAndIccon: {
    flexDirection: 'row',
  },
  taskAndValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingRight: 10,
  },
  dailyProgress: {
    paddingRight: 5,
  },
  contentContainer: {
    flex: 7,
    marginLeft: 20,
  },
  flatlistView: {
    marginRight: 10,
    height: 100,
  },
  checkbox: {
    transform: Platform.OS === 'ios' ? [{scaleX: 0.8}, {scaleY: 0.8}] : [],
    backgroundColor: 'red',
  },

  bottomView: {
    marginBottom: 30,
    backgroundColor: COLORS.Light_Powder_Blue,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    paddingBottom: 5,
  },
});
