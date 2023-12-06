import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

interface AppModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  children: ReactNode;
  isModal: boolean;
}

const AppModal: React.FC<AppModalProps> = ({
  isVisible,
  toggleModal,
  children,
  isModal = true,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal}
      swipeDirection={['down']}
      style={styles.}>
      {/* <View style={isModal ? null : styles.modal}> */}
      <View style={styles.modalContainer}>
        {/* bottom sheet modal */}
        {/* <View style={isModal ? styles.modalContainer : styles.modalContent}> */}
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  isModal: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppModal;
