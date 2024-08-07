import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';
import ScreenHeader from '../../../components/molecules/app-header/ScreenHeader';
import AppContainer from '../../../components/atoms/app-container/AppContainer';
import {FAQsArray, KnowledgeProps} from '../../../utils/mocks/FAQArray';

const FAQSetting = () => {
  const [showItems, setShowItems] = useState<number[]>([]);
  const lastIndex = FAQsArray.length - 1;
  const renderItem = ({item, index}: {item: KnowledgeProps; index: number}) => (
    <>
      <View style={styles.listTitle}>
        <View style={styles.title}>
          <AppText style={styles.listTxt} text={item?.title} />
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleArrowIcon(index)}>
          <AppIconSvg
            icon={showItems.includes(index) ? Icons.ArrowUp : Icons.ArrowDown}
            width={24}
            height={24}
            color={COLORS.dark_gray}
          />
        </TouchableOpacity>
      </View>
      {showItems.includes(index) && (
        <View
          style={[
            styles.descriptionView,
            {marginBottom: index === lastIndex ? 40 : 0},
          ]}>
          <AppText style={styles.description} text={item?.description} />
        </View>
      )}
    </>
  );
  const handleArrowIcon = (index: number) => {
    setShowItems(prevItems =>
      prevItems.includes(index)
        ? prevItems.filter(item => item !== index)
        : [...prevItems, index],
    );
  };
  const keyExtractor = (item: any, index: number) => index.toString();
  return (
    <AppContainer style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <ScreenHeader headerText="FAQs" />
        <FlatList
          data={FAQsArray}
          renderItem={renderItem}
          showsVerticalScrollIndicator
          keyExtractor={keyExtractor}
        />
      </View>
    </AppContainer>
  );
};

export default FAQSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  listTitle: {
    backgroundColor: COLORS.light_Powder_Blue,
    flexDirection: 'row',
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    paddingVertical: 12,
  },
  listTxt: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  descriptionView: {
    paddingHorizontal: 20,
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
  },
  icon: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
