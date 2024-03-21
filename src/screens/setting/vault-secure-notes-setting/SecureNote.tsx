import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';

interface NotesProps {
  title: string;
  didNotesPress: () => void;
  didDeleteNote: () => void;
  details: string;
}

const SecureNote: FC<NotesProps> = ({
  title,
  didNotesPress,
  didDeleteNote,
  details,
}) => {
  return (
    <TouchableOpacity onPress={didNotesPress} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <AppText text={title} numberOfLines={1} style={styles.title} />
        </View>
        <TouchableOpacity onPress={didDeleteNote} style={styles.icon}>
          <AppIconSvg
            icon={Icons.Delete}
            width={25}
            height={25}
            color={COLORS.green}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <AppText text={details} numberOfLines={6} style={styles.detailsTxt} />
      </View>
    </TouchableOpacity>
  );
};

export default SecureNote;

const styles = StyleSheet.create({
  container: {
    width: '44%',
    height: 165,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.green,
    marginLeft: '4%',
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 5,
    width: '100%',
    height: '20%',
  },
  titleContainer: {
    width: '77%',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.very_dark_gray,
  },
  icon: {
    width: '20%',
  },
  details: {
    height: '80%',
  },
  detailsTxt: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    textAlign: 'auto',
    fontSize: 14,
    fontFamily: fonts.dmSans[400],
  },
});
