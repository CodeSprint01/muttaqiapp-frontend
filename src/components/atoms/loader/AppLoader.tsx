import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../../styles/color';

interface AppModalProps {
  isVisible: boolean;
}

const AppLoader: React.FC<AppModalProps> = ({isVisible}) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      <View style={styles.modalContent}>
        <ActivityIndicator size={'large'} color={COLORS.green} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    padding: 20,
  },
});

export default AppLoader;
