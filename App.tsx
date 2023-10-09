/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
import TodoList from './screens/TodoList';
import { ParamsType } from './modules/Types';
import Headerless from './screens/Headerless';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({ navigation }: any) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App(): JSX.Element {
  const stackNavigator = (
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

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history" // 뒤로가기 할 때 어떻게 작동할지 설정
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white'
        }}
        // drawerContent: Drawer에 아예 다른 View 보여주기
        drawerContent={({ navigation }: any) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              onPress={() => navigation.closeDrawer()}
              title="Drawer 닫기"
            />
          </SafeAreaView>
        )}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈'
            // headerLeft: () => <Text>Left</Text> // 스크린 상단 햄버거 커스터마이징
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: '설정' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
