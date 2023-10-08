/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

export default function App(): JSX.Element {
  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 공부', done: false },
    { id: 3, text: '투두리스트 만들기', done: false }
  ]);

  const handleItemInsert = (text: string) => {
    const nextId =
      Array.isArray(todos) && todos.length > 0
        ? Math.max(...todos.map((todo) => todo.id)) + 1
        : 1;

    setTodos(todos.concat({ id: nextId, text, done: false }));
  };

  const handleToggle = (id: number) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(nextTodos);
  };

  const handleItemRemove = (id: number) => {
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
              <TodoList
                todos={todos}
                onToggle={handleToggle}
                onItemRemove={handleItemRemove}
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
  }
});
