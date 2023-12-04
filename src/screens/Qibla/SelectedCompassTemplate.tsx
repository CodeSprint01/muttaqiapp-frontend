import React, {useState} from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';

enum Options {
  Option1 = 'Option 1',
  Option2 = 'Option 2',
  Option3 = 'Option 3',
  Option4 = 'Option 4',
}

const SelectedCompassTemplate: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Options>(
    Options.Option1,
  );

  const handleSwitchChange = (value: boolean) => {
    // Depending on the selected option, update the state
    switch (selectedOption) {
      case Options.Option1:
        setSelectedOption(value ? Options.Option2 : Options.Option1);
        break;
      case Options.Option2:
        setSelectedOption(value ? Options.Option3 : Options.Option2);
        break;
      case Options.Option3:
        setSelectedOption(value ? Options.Option4 : Options.Option3);
        break;
      case Options.Option4:
        setSelectedOption(value ? Options.Option1 : Options.Option4);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Selected Option: {selectedOption}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={selectedOption === Options.Option1 ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={handleSwitchChange}
        value={selectedOption !== Options.Option1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectedCompassTemplate;
