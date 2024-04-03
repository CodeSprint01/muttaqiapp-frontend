import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AppCheckBoxTick from '../../components/molecules/app-checkbox/AppCheckBoxTick';
import AppText from '../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../styles/color';
import {AppIconSvg, Icons} from '../../components/atoms/app-icon-svg';

interface ListProps {
  isCheckBox: boolean;
  handleCheckBox: () => void;
  todoName: string;
  repeatText: string;
  handleDeleteTodo: () => void;
  handleUpdateTodo: () => void;
}

const TodoListCard: FC<ListProps> = ({
  isCheckBox,
  handleCheckBox,
  todoName,
  repeatText,
  handleDeleteTodo,
  handleUpdateTodo,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <AppCheckBoxTick isChecked={isCheckBox} onToggle={handleCheckBox} />
      </View>
      <View style={styles.todoTxt}>
        <AppText text={todoName} style={styles.txt} />
        <View style={styles.repeatContainer}>
          <AppIconSvg
            icon={Icons.Refresh}
            width={16}
            height={16}
            color={COLORS.black}
          />
          <AppText text={repeatText} style={styles.repeatTxt} />
        </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={handleDeleteTodo}>
          <AppIconSvg
            icon={Icons.Delete}
            width={24}
            height={24}
            color={COLORS.dark_gray}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpdateTodo}>
          <AppIconSvg
            icon={Icons.Update}
            width={24}
            height={24}
            color={COLORS.dark_gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoListCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light_Powder_Blue,
    paddingVertical: 11,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 11,
  },
  checkBox: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  todoTxt: {
    width: '64%',
  },
  txt: {
    color: COLORS.dark_gray,
    fontSize: 15,
    fontFamily: fonts.dmSans[500],
  },
  icons: {
    width: '23%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  repeatContainer: {
    flexDirection: 'row',
    paddingTop: 3,
    alignItems: 'center',
  },
  repeatTxt: {
    color: COLORS.pumpkin_orange,
    fontSize: 12,
    fontFamily: fonts.dmSans[400],
    paddingLeft: 9,
    alignSelf: 'center',
    paddingBottom: 2,
  },
});
