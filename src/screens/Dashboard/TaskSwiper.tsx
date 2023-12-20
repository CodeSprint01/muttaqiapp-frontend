import React, {Children, FC} from 'react';
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
  circleValue: number;
  handleCheckboxChange: any;
  checkboxes: {id: number; label: string; isChecked: boolean}[];
}

const TaskSwiper: FC<TaskProps> = ({
  circleValue,
  handleCheckboxChange,
  checkboxes,
}) => {
  const initialCheckboxes = [
    {id: 1, label: 'memorize quran', isChecked: false},
    {id: 2, label: 'memorize quran', isChecked: false},
    {id: 3, label: 'memorize quran', isChecked: false},
    {id: 4, label: 'memorize quran', isChecked: false},
    {id: 5, label: 'memorize quran', isChecked: false},
    {id: 6, label: 'memorize quran', isChecked: false},
    {id: 7, label: 'memorize quran', isChecked: false},
  ];
  // const renderItem = ({item, index}) => {
  //   return (
  //     <View key={index} style={styles.checkboxContainer}>
  //       <AppCheckBox
  //         isChecked={item?.isChecked}
  //         containerStyle={{}}
  //         onToggle={() => handleCheckboxChange(item?.id)}
  //         label={item?.label}
  //       />
  //     </View>
  //   );
  // };
  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <CircularProgress
            size={110}
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
                color={COLORS.dark_gray}
              />
            </View>
          </View>
          {/*
           <ScrollView
            // showsVerticalScrollIndicator={false}
            style={{backgroundColor: 'red'}}> */}
          {/* <ScrollView> */}
          <FlatList
            data={initialCheckboxes}
            keyExtractor={item => item.id.toString()} // Assuming 'id' is a unique identifier
            contentContainerStyle={styles.dailyTaskContainer}
            scrollEnabled
            renderItem={({item}) => (
              <View style={styles.checkboxContainer}>
                {/* <AppCheckBox
                  isChecked={item?.isChecked}
                  containerStyle={{}}
                  onToggle={() => handleCheckboxChange(item?.id)}
                  label={item?.label}
                /> */}
                <Text> {item.label} </Text>
              </View>
            )}
          />
          {/* </ScrollView> */}

          {/* <View style={styles.dailyTaskContainer}> */}
          {/* {checkboxes.map(checkbox => (
                <View key={checkbox.id} style={styles.checkboxContainer}>
                  <AppCheckBox
                    isChecked={checkbox.isChecked}
                    containerStyle={{}}
                    onToggle={() => handleCheckboxChange(checkbox.id)}
                    label={checkbox.label}
                  />
                </View>
              ))} */}
          {/* </View> */}
          {/* </ScrollView> */}
          <View style={styles.bottomView} />
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
    // backgroundColor: COLORS.Light_Powder_Blue,
    backgroundColor: COLORS.black,
    borderRadius: 22,
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
  },
  taskAndIccon: {
    flexDirection: 'row',
  },
  taskAndValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dailyProgress: {
    paddingRight: 5,
  },
  contentContainer: {
    flex: 7,
  },
  dailyTaskContainer: {
    flex: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'coral',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 1,
    backgroundColor: 'pink',
    margin: 10,
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
