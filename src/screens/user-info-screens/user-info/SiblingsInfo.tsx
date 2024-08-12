import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import AppInput from '../../../components/molecules/app-input/AppInput';
import {COLORS, fonts} from '../../../styles/color';
import {Siblings} from '../../../types/types';
import AppInputDropDown from '../../../components/molecules/app-input-drop-down/AppInputDropDown';
import {
  relationshipToBrother,
  relationshipToSister,
} from '../../../utils/mocks/AllMockArray';

interface SiblingsInfoProps {
  scrollViewRef: any;
}

const SiblingsInfo = ({scrollViewRef}: SiblingsInfoProps) => {
  const [userData, setUserData] = useState({
    fatherName: '',
    motherName: '',
    fatherCNICNo: '',
    motherCNICNo: '',
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
        cnic: '',
        relationship: null,
      }),
    );
    setBrothersList(updatedbrothersList);
    const updatedSistersList = Array.from(
      {length: NumberOfSisters},
      (_, index) => ({
        name: '',
        age: '',
        cnic: '',
        relationship: null,
      }),
    );
    setDaughtersList(updatedSistersList);
  }, []);

  const handleInputValue = (val: any, inputName: string) => {
    const stringValue = typeof val === 'number' ? String(val) : val;
    setUserData(prevState => ({
      ...prevState,
      [inputName]: stringValue,
    }));
  };

  const handleChildInputChange = (
    index: number,
    key: 'name' | 'age' | 'relationship' | 'cnic',
    value: string,
    isSon: boolean,
  ) => {
    const stringValue = typeof value === 'number' ? String(value) : value;
    if (isSon) {
      const updatedbrothersList = [...brothersList];
      updatedbrothersList[index][key] = stringValue;
      setBrothersList(updatedbrothersList);
    } else {
      const updatedSistersList = [...SistersList];
      updatedSistersList[index][key] = stringValue;
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
          inputLabel="Father’s CNIC no"
          placeholder="Type your father ‘s CNIC"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'fatherCNICNo')}
          inputValue={userData.fatherCNICNo}
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
      <View style={styles.inputs}>
        <AppInput
          inputLabel="Mother’s CNIC no"
          placeholder="Type your mother’s ‘s CNIC"
          isRequired={true}
          handleInputChange={val => handleInputValue(val, 'motherCNICNo')}
          inputValue={userData.motherCNICNo}
        />
      </View>
      {brothersList.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.siblingDetailView}>
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
                  inputValue={item.age.toString()}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel="Brother’s CNIC no"
                placeholder="Type your brother‘s CNIC"
                isRequired={true}
                handleInputChange={val =>
                  handleChildInputChange(index, 'cnic', val, true)
                }
                inputValue={userData.motherCNICNo.toString()}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={[
                styles.inputs,
                {
                  marginBottom:
                    SistersList.length === 0 &&
                    brothersList.length === index + 1
                      ? 20
                      : 0,
                },
              ]}>
              <AppInputDropDown
                placeholderText={`Choose relation to brother ${index + 1}`}
                arrayData={relationshipToBrother}
                inputLabel={`Relationship to brother ${index + 1}`}
                isRequired={true}
                handleSelectValue={val =>
                  handleChildInputChange(index, 'relationship', val, true)
                }
                handleOpenDropDown={() => {
                  SistersList.length === 0 && brothersList.length === index + 1
                    ? scrollViewRef.current.scrollToEnd({animated: true})
                    : null;
                }}
              />
            </View>
          </View>
        );
      })}
      {SistersList.map((item, index) => {
        return (
          <View key={index}>
            <View style={styles.siblingDetailView}>
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
                  inputValue={item.age.toString()}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View style={styles.inputs}>
              <AppInput
                inputLabel="Sister’s CNIC no"
                placeholder="Type your sister‘s CNIC"
                isRequired={true}
                handleInputChange={val =>
                  handleChildInputChange(index, 'cnic', val, false)
                }
                inputValue={item.cnic.toString()}
                keyboardType={'number-pad'}
              />
            </View>
            <View
              style={[
                styles.inputs,
                {marginBottom: SistersList.length === index + 1 ? 20 : 0},
              ]}>
              <AppInputDropDown
                placeholderText={`Choose relation to sister ${index + 1}`}
                arrayData={relationshipToSister}
                inputLabel={`Relationship to sister ${index + 1}`}
                isRequired={true}
                handleSelectValue={val =>
                  handleChildInputChange(index, 'relationship', val, false)
                }
                handleOpenDropDown={() => {
                  SistersList.length === index + 1
                    ? scrollViewRef.current.scrollToEnd({animated: true})
                    : null;
                }}
              />
            </View>
          </View>
        );
      })}
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
