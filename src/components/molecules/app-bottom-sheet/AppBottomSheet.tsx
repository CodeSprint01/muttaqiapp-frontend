import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {FC, useMemo, useRef, useState} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

interface sheetProps {
  isVisible?: boolean;
  children: React.ReactNode;
  extraStyle?: ViewStyle;
  snapPoint: any;
  enableHandlePanningGesture: boolean;
}
const AppBottomSheet: FC<sheetProps> = ({
  isVisible,
  children,
  extraStyle,
  snapPoint,
  enableHandlePanningGesture,
}) => {
  // const snapPoint = useMemo(() => ['25%', '50%', '75%', '95%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isShow, setIsShow] = useState(isVisible);
  const renderItem = () => {
    return <View style={[styles.sheetContent, extraStyle]}>{children}</View>;
  };
  const handleClick = () => {
    return isVisible
      ? bottomSheetRef.current?.expand()
      : bottomSheetRef.current?.close();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      // index={3}
      enableContentPanningGesture={false}
      snapPoints={snapPoint}
      enableHandlePanningGesture={enableHandlePanningGesture ?? true}
      enablePanDownToClose={isShow}>
      <BottomSheetView>{renderItem()}</BottomSheetView>
    </BottomSheet>
  );
};

export default AppBottomSheet;

const styles = StyleSheet.create({
  sheetContent: {
    // mm
  },
});
