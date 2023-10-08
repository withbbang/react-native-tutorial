import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SVG from '../../modules/SVG';

export default function Empty() {
  return (
    <View style={styles.block}>
      <SVG type={'macho'} width={60} height={60} fill="red" />
      <Text style={styles.description}>오예~! 노 할일!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e'
  }
});
