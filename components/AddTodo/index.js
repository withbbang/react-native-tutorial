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

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder={'할 일을 입력하세용'}
        value={text}
        onChangeText={setText}
      />
      {Platform.OS === 'ios' ? (
        <>
          {/* 터치했을 때 투명도 효과, android/ios 모두 사용 가능 */}
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.buttonStyle}>
              <SVG type={'plus'} width={25} height={25} fill="#fff" />
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.circleWrapper}>
          {/* 터치했을 때 물결 효과, android만 적용 가능 */}
          <TouchableNativeFeedback>
            <View style={styles.buttonStyle}>
              <SVG type={'plus'} width={25} height={25} fill="#fff" />
            </View>
          </TouchableNativeFeedback>
        </View>
      )}
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
