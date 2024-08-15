import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import TodoListCard from './TodoListCard';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';

interface TodoProps {
  handleAddTodo?: () => void;
  isCheckBox: boolean;
  handleCheckBox: () => void;
  todoName: string;
  repeatText: string;
  handleDeleteTodo: () => void;
  handleUpdateTodo: () => void;
}

const TodoTask: FC<TodoProps> = ({
  handleAddTodo,
  isCheckBox,
  handleCheckBox,
  todoName,
  repeatText,
  handleDeleteTodo,
  handleUpdateTodo,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterList, setFilterList] = useState([
    'All',
    'Today',
    'Upcoming',
    'Custom',
  ]);

  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterItemClick = (item: string) => {
    console.log(item);
    handleFilterClick();
  };

  return (
    <View style={styles.container}>
      {handleAddTodo && (
        <View style={styles.todo}>
          <AppText text={'To-do list'} style={styles.todoTxt} />
          <View style={styles.rightBtnView}>
            <TouchableOpacity onPress={handleAddTodo}>
              <AppText text={'+ Add'} style={styles.addTxt} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.3}
              style={styles.filterView}
              onPress={handleFilterClick}>
              <AppIconSvg
                height={24}
                width={24}
                icon={Icons.Filter}
                color={COLORS.green}
              />
            </TouchableOpacity>
            {showFilter && (
              <View style={styles.filterDropdown}>
                {filterList.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleFilterItemClick(item)}
                      key={item}>
                      <AppText text={item} style={styles.filterOption} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      )}
      <TodoListCard
        handleCheckBox={handleCheckBox}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
        isCheckBox={isCheckBox}
        repeatText={repeatText}
        todoName={todoName}
      />
    </View>
  );
};

export default TodoTask;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoTxt: {
    fontSize: 20,
    fontStyle: 'normal',
    fontFamily: fonts.dmSans[500],
    color: COLORS.very_dark_gray,
  },
  addTxt: {
    color: COLORS.green,
    fontSize: 16,
    fontFamily: fonts.dmSans[500],
  },
  rightBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterView: {
    marginLeft: 15,
    height: 24,
    width: 24,
  },
  filterDropdown: {
    backgroundColor: COLORS.light_Powder_Blue,
    borderWidth: 1,
    borderColor: COLORS.green,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 7,
    right: 0,
    position: 'absolute',
    top: 30,
    zIndex: 1,
  },
  filterOption: {
    fontSize: 14,
    color: COLORS.dark_gray,
    paddingVertical: 5,
    fontFamily: fonts.dmSans[500],
  },
});
