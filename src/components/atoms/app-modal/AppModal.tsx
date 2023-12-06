import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../../../styles/color';

interface AppModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  children: ReactNode;
  isModal?: boolean;
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
      style={isModal === true ? styles.empty : styles.modal}>
      <View style={styles.modal}>
        <View style={isModal === true ? styles.isModal : styles.modalContent}>
          {children}
        </View>
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
    backgroundColor: COLORS.white,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {},
});

export default AppModal;
