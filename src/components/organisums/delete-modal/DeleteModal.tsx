import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';
import AppModal from '../../atoms/app-modal/AppModal';
import AppText from '../../atoms/app-text/AppText';
import AppButton from '../../molecules/app-button/AppButton';

interface ModalProps {
  isVisible: boolean;
  CrossBtnPress: () => void;
  modalText: string;
  leftBtnText: string;
  rightBtnText: string;
  leftOnPress: () => void;
  rightOnPress: () => void;
}

const DeleteModal: FC<ModalProps> = ({
  isVisible,
  CrossBtnPress,
  modalText,
  leftBtnText,
  leftOnPress,
  rightBtnText,
  rightOnPress,
}) => {
  return (
    <View>
      <AppModal
        isVisible={isVisible}
        extraViewStyle={styles.modalView}
        children={
          <View>
            <View style={styles.crossIcon}>
              <TouchableOpacity onPress={CrossBtnPress}>
                <AppIconSvg
                  icon={Icons.Cross}
                  width={33}
                  height={33}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
            <View>
              <AppText text={modalText} style={styles.txt} />
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.cancel}>
                <AppButton buttonText={leftBtnText} onPress={leftOnPress} />
              </View>
              <View style={styles.delete}>
                <AppButton
                  buttonText={rightBtnText}
                  fill={false}
                  onPress={rightOnPress}
                />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
  },
  modalView: {
    padding: 20,
    backgroundColor: COLORS.pale_mint,
    borderRadius: 38,
  },
  txt: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
  },
  crossIcon: {
    width: '13%',
    marginLeft: '90%',
    padding: 5,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 60,
  },
  cancel: {
    width: '45%',
  },
  delete: {
    width: '45%',
  },
});
