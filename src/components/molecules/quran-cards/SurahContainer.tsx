import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, arabicFnt, fonts} from '../../../styles/color';
import {Ayah} from '../../../types/types';

interface ArabicProps {
  item: any;
  handleTextPress: () => void;
}

const SurahContainer: FC<ArabicProps> = ({item}, handleTextPress) => {
  return (
    <View style={styles.container}>
      <Text style={styles.arabicTxt}>
        {item.ayahs.map((itm: Ayah) => (
          <Text
            onPress={() => handleTextPress}
            key={itm.number}
            style={
              styles.arabic
            }>{`${itm?.text} (${itm?.numberInSurah}) `}</Text>
        ))}
      </Text>
      <View style={styles.rukuContainer}>
        {item?.seprater?.map((ruk: any) => (
          <View style={{marginVertical: 10}}>
            {ruk?.ruku === true ? (
              <View style={styles.ruku}>
                <Image
                  source={require('../../../../assets/images/ain.png')}
                  style={styles.ainImg}
                  resizeMode="contain"
                />
                <Text style={styles.rukuNumb}>{ruk?.rukuNumber}</Text>
              </View>
            ) : (
              ruk?.sajda && (
                <View style={styles.sajdaContainer}>
                  <Text style={styles.sajda}>{` ${'السجدة'} (${
                    ruk?.sajdaNumber
                  })`}</Text>
                </View>
              )
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pale_mint,
  },
  arabicTxt: {
    textAlign: 'right',
  },
  arabic: {
    fontSize: 24,
    color: COLORS.dark_gray,
    fontFamily: arabicFnt[0],
  },
  rukuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ainImg: {
    width: 50,
    height: 50,
  },
  rukuNumb: {
    position: 'absolute',
    top: 19,
    right: 20,
    fontSize: 16,
    fontFamily: fonts.dmSans[600],
    color: COLORS.dark_gray,
  },
  ruku: {
    flexDirection: 'row',
  },
  sajdaContainer: {
    flexDirection: 'row',
  },
  sajda: {
    fontSize: 20,
    fontFamily: fonts.dmSans[400],
    color: COLORS.dark_gray,
  },
});

export default SurahContainer;
