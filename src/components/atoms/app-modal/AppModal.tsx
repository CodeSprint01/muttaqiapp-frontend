import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

interface AppModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  children: ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({
  isVisible,
  toggleModal,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal}
      swipeDirection={['down']}
      style={styles.modal}>
      <View style={styles.modalContent}>{children}</View>
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
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 400,
  },
});

export default AppModal;
