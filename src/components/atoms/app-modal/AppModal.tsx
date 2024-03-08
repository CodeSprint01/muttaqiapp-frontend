import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';

interface AppModalProps {
  isVisible: boolean;
  toggleModal?: () => void;
  children: ReactNode;
  extraViewStyle?: ViewStyle;
  extraModalStyle?: ViewStyle;
}

const AppModal: React.FC<AppModalProps> = ({
  isVisible,
  toggleModal,
  children,
  extraViewStyle,
  extraModalStyle,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal}
      swipeDirection={['down']}
      style={[styles.modal, extraModalStyle]}>
      <View style={[styles.modalContent, extraViewStyle]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default AppModal;
