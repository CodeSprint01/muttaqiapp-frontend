import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../atoms/app-text/AppText';
import {discoverArray} from '../../../utils/mocks/DiscoverArray';
import {DiscoverEnum, discover} from '../../../types/keyVlaue';
import DiscoverCard from '../../molecules/discover/DiscoverCard';

interface DiscoverProps {
  onDiscoverItemPress: (type: DiscoverEnum) => void;
}

const Discover: React.FC<DiscoverProps> = ({onDiscoverItemPress}) => {
  const renderItem = ({item}: {item: discover}) => (
    <View style={styles.card}>
      <DiscoverCard
        icon={item.image}
        text={item.name}
        onPress={() => onDiscoverItemPress(item.type)}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <AppText text={'Discover'} style={styles.disTxt} />
      <View>
        <FlatList
          numColumns={4}
          data={discoverArray}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  disTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
});
