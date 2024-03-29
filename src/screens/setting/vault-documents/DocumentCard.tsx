import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, fonts} from '../../../styles/color';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import AppText from '../../../components/atoms/app-text/AppText';

interface DocProps {
  onPressDoc: () => void;
  onPressDelete: () => void;
  docText: string;
}

const DocumentCard: FC<DocProps> = ({onPressDoc, docText, onPressDelete}) => {
  return (
    <TouchableOpacity onPress={onPressDoc} style={styles.container}>
      <TouchableOpacity onPress={onPressDelete} style={styles.deleteIcon}>
        <AppIconSvg
          icon={Icons.Delete}
          width={24}
          height={24}
          color={COLORS.crimson}
        />
      </TouchableOpacity>
      <View style={styles.docIcon}>
        <AppIconSvg
          icon={Icons.Document}
          width={48}
          height={48}
          color={COLORS.green}
        />
      </View>
      <AppText text={docText} style={styles.txt} numberOfLines={2} />
    </TouchableOpacity>
  );
};

export default DocumentCard;
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    height: 167,
    width: '44%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.green,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: '4%',
    marginTop: 16,
  },
  deleteIcon: {
    alignSelf: 'flex-end',
  },
  docIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  txt: {
    color: COLORS.dark_gray,
    fontSize: 18,
    fontFamily: fonts.dmSans[500],
    textAlign: 'center',
    paddingTop: 10,
  },
});
