import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Detail 열기"
        // onPress={() => navigation.navigate('Detail')}
        onPress={() => navigation.push('Detail')}
      />
      <Button
        title="TodoList 열기"
        // onPress={() => navigation.navigate('TodoList')}
        onPress={() => navigation.push('TodoList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
