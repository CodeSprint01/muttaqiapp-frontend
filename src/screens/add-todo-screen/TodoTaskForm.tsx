import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppInput from '../../components/molecules/app-input/AppInput';
import {COLORS} from '../../styles/color';
import AppCheckBoxTick from '../../components/molecules/app-checkbox/AppCheckBoxTick';
import AppButton from '../../components/molecules/app-button/AppButton';
import AppInputDropDown from '../../components/molecules/app-input-drop-down/AppInputDropDown';

const TodoTaskForm = () => {
  const [isRepeat, setIsRepeat] = useState(false);
  const [duration, setDuration] = useState({
    holyTask: false,
    normalTask: false,
  });
  const [taskData, setTaskData] = useState({
    taskName: '',
    today: '',
  });
  const onChangeText = (key: string, val: string) => {
    setTaskData(prevState => ({...prevState, [key]: val}));
  };

  const onPressChecked = () => {
    setIsRepeat(preVale => !preVale);
  };
  const array = [
    {label: 'daily', value: 'daily'},
    {label: 'weekly', value: 'weekly'},
    {label: 'monthly', value: 'monthly'},
  ];
  const onSelectDuration = (val: string) => {
    setDuration(val);
  };

  return (
    <View style={styles.container}>
      <AppInput
        placeholder="Task name"
        handleInputChange={val => onChangeText('taskName', val)}
        inputValue={taskData?.taskName}
      />
      <AppInput
        placeholder="Today"
        handleInputChange={val => onChangeText('today', val)}
        inputValue={taskData?.today}
      />
      <View style={styles.repeatBox}>
        <View style={styles.repeat}>
          <AppCheckBoxTick
            label="Repeat"
            isChecked={isRepeat}
            onToggle={onPressChecked}
          />
        </View>
        {isRepeat && (
          <View style={styles.dropdown}>
            <AppInputDropDown
              arrayData={array}
              handleSelectValue={onSelectDuration}
              placeholderText="select"
            />
          </View>
        )}
      </View>
      <View style={styles.verticalyLine} />
      <View style={styles.bottomTask}>
        <AppCheckBoxTick
          label="Holy task"
          isChecked={duration.holyTask}
          onToggle={() =>
            setDuration(preVal => ({
              ...preVal,
              holyTask: !preVal.holyTask,
              normalTask: false,
            }))
          }
        />
        <AppCheckBoxTick
          label="Normal task"
          containerStyle={{marginLeft: 20}}
          isChecked={duration.normalTask}
          onToggle={() =>
            setDuration(preVal => ({
              ...preVal,
              normalTask: !preVal.normalTask,
              holyTask: false,
            }))
          }
        />
      </View>
      <View style={styles.verticalyLine} />
      <View style={styles.btn}>
        <AppButton buttonText="Save" />
      </View>
    </View>
  );
};

export default TodoTaskForm;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    // flex: 1,
  },
  repeatBox: {
    flexDirection: 'row',
  },
  verticalyLine: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light_gray,
  },
  bottomTask: {
    flexDirection: 'row',
  },
  repeat: {
    width: '50%',
    justifyContent: 'center',
  },
  dropdown: {
    width: '50%',
    marginBottom: 10,
  },
  btn: {
    marginTop: 100,
  },
});
