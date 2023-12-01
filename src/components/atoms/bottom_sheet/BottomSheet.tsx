import React, {useCallback, useEffect} from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
// import {AppIconSvg, Icons} from '../app-icon-svg';
import {COLORS} from '../../../styles/color';

const {height} = Dimensions.get('window');
const newHeight = height < 800 ? 800 : height;
const MAX_TRANSLATE_Y = -newHeight + 50;

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet = ({children}: BottomSheetProps) => {
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);
  const {width} = useWindowDimensions();
  const translateY = useSharedValue(0);
  const scrollTo = useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, {damping: 50});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initial value of paddingBottom
  const initialPaddingBottom = 600;

  //   Range of translateY.value (-285 to -802)
  const minValue = Platform.OS === 'ios' ? -802 : -702;
  const maxValue =
    Platform.OS === 'ios' ? (newHeight > 850 ? -300 : -200) : -200;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const context = useSharedValue({y: 0});
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -newHeight / 3) {
        scrollTo(-200);
      } else if (translateY.value < -newHeight / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );

    const paddingBottom = interpolate(
      translateY.value,
      [maxValue, minValue],
      [initialPaddingBottom, 0],
      Animated.Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
      paddingBottom,
    };
  });

  useEffect(() => {
    scrollTo(!keyboardVisible ? -newHeight / 3 : -newHeight / 1.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardVisible]);

  return (
    <>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle, {width}]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    alignSelf: 'center',
    height: newHeight,
    backgroundColor: COLORS.white,
    position: 'absolute',
    top: newHeight,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 2,
  },
  backButtonBackground: {
    position: 'absolute',
    // left: edgeMargin,
    top: 50,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  backIcon: {marginRight: 5},
});

export default BottomSheet;
