import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';
import {COLORS} from '../../styles/color';
import AppText from '../../components/atoms/app-text/AppText';
import ScreenHeader from '../../components/molecules/app-header/ScreenHeader';
import {KnowledgeArray, KnowledgeProps} from '../../utils/mocks/Knowledge';

const Knowledge = () => {
  const [showItems, setShowItems] = useState<number[]>([]);
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
            icon={showItems.includes(index) ? Icons.ArrowDown : Icons.ArrowUp}
            width={24}
            height={24}
            color={COLORS.dark_gray}
          />
        </TouchableOpacity>
      </View>
      {showItems.includes(index) && (
        <View style={styles.descriptionView}>
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
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <ScreenHeader headerText="Knowledge" />
        <FlatList
          data={KnowledgeArray}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
};

export default Knowledge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pale_mint,
  },
  listTitle: {
    backgroundColor: COLORS.Light_Powder_Blue,
    flexDirection: 'row',
    borderRadius: 12,
    marginTop: 20,
  },
  title: {
    width: '83%',
    paddingVertical: 12,
    paddingLeft: 18,
  },
  listTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.green,
  },
  descriptionView: {
    // backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
  },
  icon: {
    width: '17%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
