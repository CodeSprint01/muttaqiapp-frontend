import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../../components/atoms/app-icon-svg';
import {COLORS, fonts} from '../../../styles/color';
import {TodoTask} from '../../../types/types';

interface todoProps {
  todoName: string;
  handelShowmore?: () => void;
  todoArray: TodoTask[];
  isShowmore: boolean;
}

const TrackerTodoTask: FC<todoProps> = ({
  todoName,
  handelShowmore,
  todoArray,
  isShowmore = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <AppText numberOfLines={1} text={todoName} style={styles.leftTxt} />
        </View>
        {isShowmore && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handelShowmore}
            style={styles.showIcon}>
            <AppText text={'Show more'} style={styles.showmore} />
            <AppIconSvg
              icon={Icons.ArrowRight}
              width={20}
              height={20}
              color={COLORS.green}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.todoContainer}>
        <View style={styles.verticalLine} />
        <FlatList
          contentContainerStyle={styles.flatList}
          data={todoArray}
          horizontal
          renderItem={({item}) => (
            <View style={styles.circleContainer}>
              <View style={item.isDo ? styles.circleGreen : styles.circleWhite}>
                <Text style={styles.dayName}>{item.dayName}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TrackerTodoTask;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textContainer: {
    width: '60%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftTxt: {
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.dark_gray,
  },
  showmore: {
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
    color: COLORS.green,
  },
  flatList: {
    justifyContent: 'space-between',
    flex: 1,
  },
  verticalLine: {
    width: '99%',
    height: 1.5,
    backgroundColor: COLORS.green,
    position: 'absolute',
    marginTop: 39,
    marginLeft: 11,
  },
  circleGreen: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.green,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  circleWhite: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.light_cyan,
    borderWidth: 1,
    borderColor: COLORS.green,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  dayName: {
    color: COLORS.dark_gray,
    marginTop: 30,
    position: 'absolute',
    fontSize: 10,
    textAlign: 'center',
  },
  todoContainer: {
    marginTop: 25,
    width: '100%',
    height: 80,
    backgroundColor: COLORS.light_Powder_Blue,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
