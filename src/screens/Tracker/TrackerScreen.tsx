import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const TrackerScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Show Bottom Sheet Modal</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        swipeDirection={['down']}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <Text>Your Bottom Sheet Content Goes Here </Text>
          <Text>Your Bottom Sheet Content Goes Here </Text>
          <Text>Your Bottom Sheet Content Goes Here </Text>
          <Text>Your Bottom Sheet Content Goes Here </Text>
          <Text>Your Bottom Sheet Content Goes Here </Text>
          <Text>Your Bottom Sheet Content Goes Here </Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 400,
  },
});

export default TrackerScreen;
