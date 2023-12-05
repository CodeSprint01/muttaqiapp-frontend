import React, {FC} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS} from '../../styles/color';
import {compassTemplate} from '../../utils/mocks/AllMockArray';
import {AppIconSvg} from '../../components/atoms/app-icon-svg';

interface CompassTemplateModalProps {
  onSelectItem: (item: any) => void;
}

const CompassTemplateModal: FC<CompassTemplateModalProps> = ({
  onSelectItem,
}) => {
  return (
    <>
      <AppText text={'Select Theme'} style={styles.headerTxt} />
      <View style={styles.listContainer}>
        <FlatList
          data={compassTemplate}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                onSelectItem(item);
              }}
              style={styles.imageBox}>
              <View style={{}}>
                <AppIconSvg
                  icon={item.compassImage}
                  color={COLORS.black}
                  height={112}
                  width={112}
                />
              </View>
              <View style={styles.compsPinContainer}>
                <AppIconSvg
                  icon={item.compassPin}
                  color={COLORS.black}
                  height={35}
                  width={35}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default CompassTemplateModal;

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 20,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 81,
  },
  imageBox: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.light_blue,
    flexDirection: 'row',
    marginBottom: 100,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  compassImg: {
    width: 112,
    height: 112,
  },
  compsPin: {
    width: 35,
    height: 35,
  },
  compsPinContainer: {
    position: 'absolute',
  },
  listContainer: {
    marginHorizontal: 10,
  },
});
