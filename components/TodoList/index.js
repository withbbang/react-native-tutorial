import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SVG from '../../modules/SVG';
import TodoItem from '../TodoItem';

export default function TodoList({ todos, onToggle, onItemRemove }) {
  return (
    <FlatList
      // ItemSeparatorComponent: 컴포넌트 사이 구분선 넣기
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({ item: { id, text, done } }) => (
        <TodoItem
          id={id}
          text={text}
          done={done}
          onToggle={onToggle}
          onItemRemove={onItemRemove}
        />
      )}
      // keyExtractor: React 에서 반복되는 컴포넌트 렌더링시 주는 key props와 동일
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1
  }
});
