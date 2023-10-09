/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
import TodoList from './screens/TodoList';
import { ParamsType } from './modules/Types';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* option.title: 화면 타이틀 지정 방법 1 */}
        <Stack.Screen name="Home" component={Home} options={{ title: '홈' }} />
        {/* option.title에 라우트 파라미터값을 포함시키는 방법 */}
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route: { params } }: ParamsType) => {
            const returnValue = {
              title: '상세정보 - '
            };

            if (params && params.data) {
              returnValue.title += params.data;
            }

            return returnValue;
          }}
        />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
