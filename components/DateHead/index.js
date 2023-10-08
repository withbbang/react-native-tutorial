import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DateHead() {
  const { top } = useSafeAreaInsets(); // 아이폰 StatusBar 영역 가져오는 훅

  return (
    <>
      {/* StatusBar: IOS는 아래 방법으로 기기 display 최상단에 배경색을 줄 수 있음 */}
      <View style={[styles.statusBarPlaceholer, { height: top }]} />
      {/* StatusBar: 안드로이드는 아래 방법으로 기기 display 최상단에 배경색을 줄 수 있음 */}
      {/* IOS는 react-native-safe-area-context third party 라이브러리를 사용해야함 */}
      {/* barStyle: 모든 OS 동일하게 적용됨 */}
      <StatusBar backgroundColor={'#26a69a'} barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>2023 10 08</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholer: {
    backgroundColor: '#26a69a'
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a'
  },
  dateText: {
    fontSize: 24,
    color: 'white'
  }
});
