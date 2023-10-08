import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Detail({ navigation, route }) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{route.params.data}</Text>
      {/* navigate: 이동하는 화면이 동일한 화면일 경우 stack에 쌓지 않고 파라미터만 변경한다. */}
      <Button
        title="Detail 열기"
        onPress={() =>
          navigation.navigate('Detail', {
            data: 'navigate' + route.params.data
          })
        }
      />
      {/* push: 이동하는 화면이 이동할 경우 stack에 모조리 쌓는다 */}
      <Button
        title="Detail 열기"
        onPress={() =>
          navigation.push('Detail', { data: 'push' + route.params.data })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 48
  }
});
