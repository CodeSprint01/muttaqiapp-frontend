import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from '../../atoms/app-text/AppText';
import DiscoverCard from '../../molecules/discover-section/DiscoverCard';
import {discoverArray} from '../../../utils/mocks/DiscoverArray';

const Discover = () => {
  return (
    <View style={styles.container}>
      <AppText text={'Discover'} style={styles.disTxt} />
      <View style={styles.cardContainer}>
        <FlatList
          data={discoverArray}
          renderItem={(item: any) => {
            <View style={styles.card}>
              <DiscoverCard icon={item.image} text={item.name} />
            </View>;
          }}
        />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DEDE',
  },

  disTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});
