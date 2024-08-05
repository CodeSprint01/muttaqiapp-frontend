import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';
import {Siblings} from '../../../types/types';

const SiblingsInfo = () => {
  const [userData, setUserData] = useState({
    fatherName: '',
    motherName: '',
  });
  const [brothersList, setBrothersList] = useState<Siblings[]>([]);
  const [SistersList, setDaughtersList] = useState<Siblings[]>([]);

  useEffect(() => {
    const NumberOfSisters = 3;
    const NumberOfBrothers = 3;
    const updatedbrothersList = Array.from(
      {length: NumberOfBrothers},
      (_, index) => ({
        name: '',
        age: '',
      }),
    );
    setBrothersList(updatedbrothersList);
    const updatedSistersList = Array.from(
      {length: NumberOfSisters},
      (_, index) => ({
        name: '',
        age: '',
      }),
    );
    setDaughtersList(updatedSistersList);
  }, []);

  const handleInputValue = (val: any, inputName: string) => {
    setUserData(prevState => ({
      ...prevState,
      [inputName]: val,
    }));
  };

  const handleChildInputChange = (
    index: number,
    key: 'name' | 'age',
    value: string,
    isSon: boolean,
  ) => {
    if (isSon) {
      const updatedbrothersList = [...brothersList];
      updatedbrothersList[index][key] = value;
      setBrothersList(updatedbrothersList);
    } else {
      const updatedSistersList = [...SistersList];
      updatedSistersList[index][key] = value;
      setDaughtersList(updatedSistersList);
    }
  };

  return (
    <View>
      <AppText text={'Family information'} style={styles.formTitle} />
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Father name"
          placeholder="Type your father full name"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'fatherName')}
          inputValue={userData.fatherName}
        />
      </View>
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Mother name"
          placeholder="Type your mother full name"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'motherName')}
          inputValue={userData.motherName}
        />
      </View>
      {brothersList.map((item, index) => (
        <View key={index} style={styles.siblingDetailView}>
          <View style={styles.siblingView}>
            <AppInput
              inputLabel={`Brother ${index + 1} name`}
              isRequired={true}
              placeholder="Enter your brother's name"
              handleInputChange={val =>
                handleChildInputChange(index, 'name', val, true)
              }
              inputValue={item.name}
            />
          </View>
          <View style={styles.siblingView}>
            <AppInput
              inputLabel="Age"
              isRequired={true}
              placeholder="Enter brother's age"
              handleInputChange={val =>
                handleChildInputChange(index, 'age', val, true)
              }
              inputValue={item.age}
              keyboardType={'number-pad'}
            />
          </View>
        </View>
      ))}
      {SistersList.map((item, index) => (
        <View key={index} style={styles.siblingDetailView}>
          <View style={styles.siblingView}>
            <AppInput
              inputLabel={`Sister ${index + 1} name`}
              isRequired={true}
              placeholder="Your Sister's name"
              handleInputChange={val =>
                handleChildInputChange(index, 'name', val, false)
              }
              inputValue={item.name}
            />
          </View>
          <View style={styles.siblingView}>
            <AppInput
              inputLabel="Age"
              isRequired={true}
              placeholder="Enter Sister's age"
              handleInputChange={val =>
                handleChildInputChange(index, 'age', val, false)
              }
              inputValue={item.age}
              keyboardType={'number-pad'}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default SiblingsInfo;

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
  siblingDetailView: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  siblingView: {
    width: '46%',
  },
});
