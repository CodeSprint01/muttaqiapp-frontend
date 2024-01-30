import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import TodoListCard from './TodoListCard';

interface TodoProps {
  handleAddTodo: () => void;
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
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <AppText text={'To-do list'} style={styles.todoTxt} />
        <TouchableOpacity onPress={handleAddTodo}>
          <AppText text={'+ Add'} style={styles.addTxt} />
        </TouchableOpacity>
      </View>
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
    paddingTop: 32,
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
});
