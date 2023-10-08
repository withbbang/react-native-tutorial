import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  FlatList
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import todosStorage from '../../storages/todosStorage';
import AddTodo from '../../components/AddTodo';
import DateHead from '../../components/DateHead';
import TodoItem from '../../components/TodoItem';
import Empty from '../../components/Empty';

export default function TodoList({ route }) {
  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 공부', done: false },
    { id: 3, text: '투두리스트 만들기', done: false }
  ]);

  /**
   * 앱을 포그라운드로 넘길 때 todo list 가져오기
   *
   * <저장하는 부분보다 가져오는 부분을 먼저 호출해야한다!>
   * useEffect는 선언 순서대로 호출하는데 저장하는 useEffect를 먼저 호출할 시
   * 초기값을 먼저 저장해버린 다음에 가져오기가 진행되므로 저장된 초기값만 가져오기 때문이다.
   */
  useEffect(() => {
    console.log(route.params.data);
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  // 앱을 백그라운드로 넘길 때 todo list 저장
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const handleItemInsert = (text) => {
    const nextId =
      Array.isArray(todos) && todos.length > 0
        ? Math.max(...todos.map((todo) => todo.id)) + 1
        : 1;

    setTodos(todos.concat({ id: nextId, text, done: false }));
  };

  const handleToggle = (id) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(nextTodos);
  };

  const handleItemRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {/* SafeAreaProvider: IOS는 아래 방법으로 기기 display 최상단에 배경색을 줄 수 있음 */}
      {/* 안드로이드는 StatusBar를 조작해야함 */}
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={styles.block}>
          {/* IOS 경우 키보드가 화면을 가리는 현상을 막기 위한 패키지 */}
          <KeyboardAvoidingView
            style={styles.avoid}
            // behavior={Platform.OS === 'ios' ? 'padding' : undefined} // 밑에랑 동일
            behavior={Platform.select({ ios: 'padding', android: undefined })}
          >
            <DateHead />
            {Array.isArray(todos) && todos.length > 0 ? (
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
                    onToggle={handleToggle}
                    onItemRemove={handleItemRemove}
                  />
                )}
                // keyExtractor: React 에서 반복되는 컴포넌트 렌더링시 주는 key props와 동일
                keyExtractor={(item) => item.id.toString()}
              />
            ) : (
              <Empty />
            )}
            <AddTodo onItemInsert={handleItemInsert} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1, // 자신이 차지할 수 있는 영역 모두 차지하는 효과
    backgroundColor: '#fff'
  },
  avoid: {
    flex: 1
  },
  list: {
    flex: 1
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1
  }
});
