import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Headerless({ navigation }) {
  return (
    // SafeAreaView: 상태바에 침범하는 view를 막아줌
    <SafeAreaView>
      <View>
        <Text>Header가 없네?!</Text>
        <Button onPress={() => navigation.pop()} title={'뒤로가기'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
