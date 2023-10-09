/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
import TodoList from './screens/TodoList';
import { ParamsType } from './modules/Types';
import Headerless from './screens/Headerless';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{ headerShown: false }} // 모든 화면의 헤더 유무 설정
      >
        {/* option.title: 화면 타이틀 지정 방법 1 */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            }
          }}
        />
        {/* option.title에 라우트 파라미터값을 포함시키는 방법 */}
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route: { params } }: ParamsType) => {
            const returnValue = {
              title: '상세정보 - ',
              headerLeft: ({ onPress }: any) => (
                <TouchableOpacity onPress={onPress}>
                  <Text>Left</Text>
                </TouchableOpacity>
              ),
              headerTitle: ({ children }: any) => (
                <View>
                  <Text>{children}</Text>
                </View>
              ),
              headerRight: () => (
                <View>
                  <Text>Right</Text>
                </View>
              ),
              headerBackVisible: false // 안드로이드의 헤더 뒤로가기 버튼 유무설정
            };

            if (params && params.data) {
              returnValue.title += params.data;
            }

            return returnValue;
          }}
        />
        <Stack.Screen
          name="Headerless"
          component={Headerless}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
