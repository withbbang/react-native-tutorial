import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Home({ navigation }) {
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
    </View>
  );
}

const styles = StyleSheet.create({});
