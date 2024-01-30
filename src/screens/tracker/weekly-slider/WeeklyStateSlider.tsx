import {FlatList, StyleSheet, View, Platform} from 'react-native';
import React, {FC} from 'react';
import AppText from '../../../components/atoms/app-text/AppText';
import {COLORS, fonts} from '../../../styles/color';
import SliderListCard from './SliderListCard';
import {Icons} from '../../../utils/helper/svg';
import {StatsList} from '../../../utils/mocks/tracker/StatsListArray';
import {
  graphDemo1,
  graphData2,
  graphData3,
  graphData4,
} from '../../../utils/mocks/tracker/StatsGraphArray';
import {LineChart} from 'react-native-gifted-charts';

interface StatsProps {
  graphData: any;
  handleEyeClick: (index: number) => void;
}

const WeeklyStateSlider: FC<StatsProps> = ({handleEyeClick, graphData}) => {
  console.log(graphData[0].text, 'garpdata');

  const renderItem = ({item, index}: {item: StatsList; index: number}) => {
    return (
      <View style={styles.listCard}>
        <SliderListCard
          listText={item.text}
          dotColor={item.boxColor}
          icon={item.isShowEye ? Icons.Eye : Icons.EyeSlash}
          onPress={() => handleEyeClick(index)}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppText text={'Week overview'} style={styles.weeklyTxt} />
      <View style={styles.sliderContainner}>
        <View style={styles.leftSide}>
          <LineChart
            curved
            data={graphDemo1}
            data2={graphData[0]?.isShowEye ? graphData2 : []}
            data3={graphData[1]?.isShowEye ? graphData3 : []}
            data4={graphData[2]?.isShowEye ? graphData4 : []}
            maxValue={100}
            dataPointsColor1={COLORS.light_Powder_Blue}
            dataPointsColor2={COLORS.turquoise_blue}
            dataPointsColor3={COLORS.royal_blue}
            dataPointsColor4={COLORS.golden_rod}
            color1={COLORS.light_Powder_Blue}
            color2={COLORS.turquoise_blue}
            color3={COLORS.royal_blue}
            color4={COLORS.golden_rod}
            strokeDashArray4={[5, 5]}
            height={110}
            stepValue={20}
            backgroundColor={COLORS.light_Powder_Blue}
            yAxisColor={COLORS.light_Powder_Blue}
            verticalLinesColor={'red'}
            xAxisIndicesHeight={2}
            xAxisIndicesWidth={2}
            xAxisIndicesColor={'red'}
            xAxisLabelTexts={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            dashWidth={0}
            width={200}
            xAxisLength={165}
            thickness={1}
            spacing={22}
            xAxisColor={COLORS.green}
            xAxisThickness={2}
          />
        </View>
        <View style={styles.rightSide}>
          <FlatList
            data={graphData}
            renderItem={renderItem}
            keyExtractor={item => item.text}
          />
        </View>
      </View>
    </View>
  );
};

export default WeeklyStateSlider;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
  },
  weeklyTxt: {
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: fonts.dmSans[500],
    color: COLORS.very_dark_gray,
    paddingTop: 21,
  },
  sliderContainner: {
    width: '91%',
    height: 165,
    alignSelf: 'center',
    marginTop: 9,
    borderRadius: 38,
    flexDirection: 'row',
    backgroundColor: COLORS.light_Powder_Blue,
    elevation: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(111, 140, 176)',
        shadowOffset: {
          width: 20,
          height: 20,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderTopColor: 'white',
        borderWidth: 2,
        borderLeftColor: 'white',
        borderBottomColor: COLORS.light_Powder_Blue,
        borderRightColor: COLORS.light_Powder_Blue,
      },
    }),
  },
  leftSide: {
    width: '62%',
    height: 165,
    marginTop: 20,
    marginLeft: 7,
  },
  rightSide: {
    width: '38%',
    paddingTop: 45,
  },
  listCard: {
    marginTop: 9,
    marginRight: 7,
  },
});
