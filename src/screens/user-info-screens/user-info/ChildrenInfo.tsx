import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';
import {Child} from '../../../types/types';

const ChildrenInfo = () => {
  const [userData, setUserData] = useState({
    spouseName: '',
    numberOfSons: '',
    numberOfDaughters: '',
  });
  const [sonsList, setSonsList] = useState<Child[]>([]);
  const [daughtersList, setDaughtersList] = useState<Child[]>([]);

  const handleInputValue = (val: any, inputName: string) => {
    if (inputName === 'numberOfSons') {
      const updatedSonsList = Array.from({length: val}, (_, index) => ({
        name: '',
        age: '',
      }));
      setSonsList(updatedSonsList);
    } else if (inputName === 'numberOfDaughters') {
      const updatedDaughtersList = Array.from({length: val}, (_, index) => ({
        name: '',
        age: '',
      }));
      setDaughtersList(updatedDaughtersList);
    }
    const stringValue = typeof val === 'number' ? String(val) : val;
    setUserData(prevState => ({
      ...prevState,
      [inputName]: stringValue,
    }));
  };

  const handleChildInputChange = (
    index: number,
    key: 'name' | 'age',
    value: string,
    isSon: boolean,
  ) => {
    const stringValue = typeof value === 'number' ? String(value) : value;
    if (isSon) {
      const updatedSonsList = [...sonsList];
      updatedSonsList[index][key] = stringValue;
      setSonsList(updatedSonsList);
    } else {
      const updatedDaughtersList = [...daughtersList];
      updatedDaughtersList[index][key] = stringValue;
      setDaughtersList(updatedDaughtersList);
    }
  };

  return (
    <View>
      <AppText text={'Family information'} style={styles.formTitle} />
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Spouse 1 name"
          placeholder="Type your spouse name"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'spouseName')}
          inputValue={userData.spouseName}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Number of sons"
          placeholder="Enter the number of your sons"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'numberOfSons')}
          inputValue={userData.numberOfSons.toString()}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Number of daughters"
          placeholder="Enter the number of your daughters"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'numberOfDaughters')}
          inputValue={userData.numberOfDaughters.toString()}
          keyboardType={'number-pad'}
        />
      </View>
      {sonsList.map((item, index) => (
        <View key={index} style={styles.childDetailView}>
          <View style={styles.childView}>
            <AppInput
              inputLabel={`Son ${index + 1} name`}
              isRequired={true}
              placeholder="Enter your son's name"
              handleInputChange={val =>
                handleChildInputChange(index, 'name', val, true)
              }
              inputValue={item.name}
            />
          </View>
          <View style={styles.childView}>
            <AppInput
              inputLabel="Age"
              isRequired={true}
              placeholder="Enter son's age"
              handleInputChange={val =>
                handleChildInputChange(index, 'age', val, true)
              }
              inputValue={item.age.toString()}
              keyboardType={'number-pad'}
            />
          </View>
        </View>
      ))}
      {daughtersList.map((item, index) => (
        <View key={index} style={styles.childDetailView}>
          <View style={styles.childView}>
            <AppInput
              inputLabel={`Daughter ${index + 1} name`}
              isRequired={true}
              placeholder="Enter your daughter's name"
              handleInputChange={val =>
                handleChildInputChange(index, 'name', val, false)
              }
              inputValue={item.name}
            />
          </View>
          <View style={styles.childView}>
            <AppInput
              inputLabel="Age"
              isRequired={true}
              placeholder="Enter daughter's age"
              handleInputChange={val =>
                handleChildInputChange(index, 'age', val, false)
              }
              inputValue={item.age.toString()}
              keyboardType={'number-pad'}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default ChildrenInfo;

const styles = StyleSheet.create({
  formTitle: {
    color: COLORS.green,
    fontSize: 24,
    fontFamily: fonts.dmSans[700],
    paddingTop: 4,
  },
  inputs: {
    marginTop: 24,
  },
  childDetailView: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  childView: {
    width: '46%',
  },
});
