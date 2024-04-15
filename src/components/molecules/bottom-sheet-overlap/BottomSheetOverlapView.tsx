import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import {COLORS, fonts, spacing} from '../../../styles/color';
import {ViewStyle} from 'react-native';
import AppText from '../../atoms/app-text/AppText';
import {AppIconSvg, Icons} from '../../atoms/app-icon-svg';

interface Props {
  showBottomSheet: boolean;
  children: React.ReactNode;
  snapPoints?: any;
  enableHeaderLine?: boolean;
  setShowBottomSheet: (status: boolean) => void;
  extraStyle?: ViewStyle;
  headerViewStyle?: ViewStyle;
  handlerStyle?: ViewStyle;
  enableHeader?: boolean;
  didPressHeaderRight?: () => void;
  didPressHeaderLeft?: () => void;
  headerTitle?: string;
}

const BottomSheetOverlapView = ({
  showBottomSheet,
  children,
  snapPoints,
  enableHeaderLine,
  setShowBottomSheet,
  extraStyle,
  headerViewStyle,
  handlerStyle,
  enableHeader,
  didPressHeaderRight,
  didPressHeaderLeft,
  headerTitle,
}: Props) => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (showBottomSheet) {
      // dispatch(actionHideTabbarMenu(true));
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(slideAnimation, {
        toValue: 0,
        useNativeDriver: true,
      }).start(({finished}) => {
        // Animation complete, now close the sheet
        if (!showBottomSheet && finished) {
          sheetRef.current?.close();
        }
      });
    }
  }, [showBottomSheet]);

  const deviceHeight = Dimensions.get('window').height;
  const responsivePoints = [deviceHeight * 0.75, deviceHeight * 0.75, 1];

  useEffect(() => {
    if (showBottomSheet) {
      sheetRef.current?.present();
    } else {
      sheetRef.current?.close();
    }
  }, [showBottomSheet]);

  const closeSheet = () => {
    setShowBottomSheet(false);
    sheetRef.current?.close();
  };

  const onScrollSheet = (index: number) => {
    if ((showBottomSheet && index === -1) || index === 2) {
      closeSheet();
    }
  };

  const handleBackdropPress = () => {
    if (showBottomSheet) {
      closeSheet();
    }
  };

  const handle = () => {
    return (
      <>
        {enableHeader && (
          <View style={styles.header}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  didPressHeaderLeft && didPressHeaderLeft();
                }}>
                <AppIconSvg
                  icon={Icons.Delete}
                  color={COLORS.black}
                  width={30}
                  height={30}
                />
              </TouchableOpacity>
            </View>
            <AppText style={styles.headerText} text={headerTitle} />
            <TouchableOpacity
              onPress={() => {
                didPressHeaderRight && didPressHeaderRight();
                // onSharePress();
              }}
              style={[styles.avatarViewStyle]}>
              {/* <DownloadAvatar /> */}
            </TouchableOpacity>
          </View>
        )}
        <View
          style={[
            styles.headerView,
            {height: enableHeaderLine ? 40 : 16},
            headerViewStyle,
          ]}>
          {enableHeaderLine && (
            <View style={[styles.handler, handlerStyle]}></View>
          )}
        </View>
      </>
    );
  };

  const renderItem = () => {
    return <View style={[styles.sheetContent, extraStyle]}>{children}</View>;
  };

  return (
    <>
      {showBottomSheet && (
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <Animated.View style={[styles.backdrop, {opacity: slideAnimation}]} />
        </TouchableWithoutFeedback>
      )}
      <BottomSheetModal
        ref={sheetRef}
        snapPoints={!snapPoints?.length ? responsivePoints : snapPoints}
        handleComponent={handle}
        enableContentPanningGesture={false}
        overDragResistanceFactor={21}
        onAnimate={(fromIndex: number, toIndex: number) => {
          onScrollSheet(toIndex);
        }}>
        <BottomSheetView>{renderItem()}</BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sheetContent: {
    height: Dimensions.get('window').height,
    zIndex: 30,
    paddingHorizontal: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerContainer: {
    height: spacing.bottomSheetHeader,
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.green,
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  handler: {
    backgroundColor: COLORS.dark_gray,
    height: 4,
    borderRadius: 8,
    width: 80,
  },
  avatarViewStyle: {
    height: 35,
    width: 35,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.green,
    paddingVertical: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerLeft: {
    alignSelf: 'flex-start',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: fonts.dmSans[800],
    letterSpacing: 0.2,
    lineHeight: 15,
    color: COLORS.black,
  },
});

export default BottomSheetOverlapView;
