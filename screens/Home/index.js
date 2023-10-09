import React, { useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Home({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: '홈' }); // setOptions: 화면 타이틀 지정 방법 2
  }, [navigation]);

  return (
    <View>
      <Button
        title="Detail 열기"
        // onPress={() => navigation.navigate('Detail', { data: '상남자 김영선' })}
        onPress={() => navigation.push('Detail', { data: '상남자 김영선' })}
      />
      <Button
        title="TodoList 열기"
        // onPress={() => navigation.navigate('TodoList', { data: '상남자 김영선' })}
        onPress={() => navigation.push('TodoList', { data: '상남자 김영선' })}
      />
      <Button
        title="Headerless 열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
