import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';

function IDText() {
  const route = useRoute();

  return <Text style={styles.text}>id: {route.params.data}</Text>;
}

export default function Detail({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세 정보 - ${route.params.data}`
    });
  }, [navigation, route.params.data]);

  return (
    <View style={styles.block}>
      {/* <Text style={styles.text}>{route.params.data}</Text> */}
      <IDText />
      <View style={styles.buttons}>
        {/* navigate: 이동하는 화면이 동일한 화면일 경우 stack에 쌓지 않고 파라미터만 변경한다. */}
        <Button
          title="Navigate Detail 열기"
          onPress={() =>
            navigation.navigate('Detail', {
              data: 'navigate' + route.params.data
            })
          }
        />
        {/* push: 화면이 이동할 경우 stack에 모조리 쌓는다 */}
        <Button
          title="Push Detail 열기"
          onPress={() =>
            navigation.push('Detail', { data: 'push' + route.params.data })
          }
        />
        {/* pop: 화면 stack 하나 pop */}
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        {/* popToTop: 처음 화면 stack을 제외한 모든거 pop */}
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
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
  },
  buttons: {
    flexDirection: 'row'
  }
});
