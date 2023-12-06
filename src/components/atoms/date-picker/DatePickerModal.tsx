import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerModal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = newDate => {
    // setSelectedDate(newDate);
    // const day = newDate.getDate();
    // const month = newDate.getMonth() + 1; // Months are zero-based
    // const year = newDate.getFullYear();
    // console.log(`Selected Date: ${day}/${month}/${year}`);
  };

  return (
    <View>
      <DatePicker
        date={selectedDate}
        mode="date" // Set mode to 'date' to display only the date
        onDateChange={handleDateChange}
      />
      {/* <Text>gg</Text> */}
    </View>
  );
};

export default DatePickerModal;
