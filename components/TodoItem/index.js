import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import SVG from '../../modules/SVG';

const trashSize = 25;

export default function TodoItem({ id, text, done, onToggle, onItemRemove }) {
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        // style: IOS에서만 적용된다. ANDROID는 직접 컴포넌트를 제작해야한다.
        { text: '취소', onPress: undefined, style: 'cancel' },
        {
          text: '삭제',
          onPress: () => onItemRemove(id),
          style: 'destructive'
        }
      ],
      {
        cancelable: true,
        onDismiss: undefined
      }
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && <SVG type={'check'} width={20} height={20} fill="#fff" />}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={remove}>
          <SVG
            type={'trash'}
            width={trashSize}
            height={trashSize}
            fill="#000"
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center'
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26a69a',
    borderWidth: 1,
    marginRight: 16
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a'
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121'
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through'
  },
  removePlaceholder: {
    width: trashSize,
    height: trashSize
  }
});
