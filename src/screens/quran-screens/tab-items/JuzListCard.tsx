import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../../styles/color';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {JuzData} from '../../../types/types';

interface Juzprops {
  data: JuzData[];
  juz: number;
  onPress: () => void;
}

const JuzListCard: FC<Juzprops> = ({data, juz, onPress}) => {
  console.log(data);
  return (
    <View>
      <View style={styles.juzContainer}>
        <AppText text={`Juz ${juz}`} style={styles.juzNumber} />
      </View>
      <FlatList
        data={data}
        renderItem={({item}: {item: JuzData}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={onPress}>
            <View style={styles.leftSide}>
              {item.part === 2 || item.part === 3 || item.part === 4 ? (
                <AppIconSvg
                  icon={
                    item.part === 2
                      ? Icons.OneOverFour
                      : item.part === 3
                      ? Icons.OneOverTwo
                      : Icons.OneOverThree
                  }
                  width={36}
                  height={36}
                  color="red"
                />
              ) : (
                <View style={styles.circle}>
                  <AppText text={1} style={styles.partTxt} />
                </View>
              )}
            </View>
            <View style={styles.rightSide}>
              <View>
                <AppText
                  text={item.arabic}
                  style={styles.arabicTxt}
                  numberOfLines={1}
                />
              </View>
              <View style={styles.descriptionContiner}>
                <AppText text={item.surahName} style={styles.surahTxt} />
                <View style={styles.verticalLine} />
                <AppText text={`Verse ${2}`} style={styles.surahTxt} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default JuzListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  juzContainer: {
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: COLORS.light_Powder_Blue,
    marginTop: 16,
  },
  juzNumber: {
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.medium_gray,
    textAlign: 'center',
  },
  leftSide: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.light_black_gray,
  },
  partTxt: {
    color: COLORS.green,
    textAlign: 'center',
    fontSize: 10,
    fontWight: '400',
  },

  rightSide: {
    width: '80%',
  },
  arabicTxt: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  surahTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.light_black_gray,
  },
  verticalLine: {
    backgroundColor: COLORS.light_black_gray,
    marginHorizontal: 8,
    height: 15,
    width: 1.5,
  },
  descriptionContiner: {
    flexDirection: 'row',
    paddingTop: 6,
    marginLeft: 7,
  },
});
