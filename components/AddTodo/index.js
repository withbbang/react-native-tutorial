import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import SVG from '../../modules/SVG';

export default function AddTodo() {
  const [text, setText] = useState('');

  const button = (
    <View style={styles.buttonStyle}>
      <SVG type={'plus'} width={25} height={25} fill="#fff" />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder={'할 일을 입력하세용'}
        value={text}
        onChangeText={setText}
      />
      {Platform.select({
        ios: <TouchableOpacity activeOpacity={0.5}>{button}</TouchableOpacity>,
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback>{button}</TouchableNativeFeedback>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24
  }
});
