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
import Main from './screens/Main';
import MaterialMain from './screens/MaterialMain';
import { ParamsType } from './modules/Types';
import Headerless from './screens/Headerless';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

function HomeScreenForBottomNavigator() {
  return <Text>Home</Text>;
}

function SearchScreenForBottomNavigator() {
  return <Text>Search</Text>;
}

function NotificationScreenForBottomNavigator() {
  return <Text>Notification</Text>;
}

function MessageScreenForBottomNavigator() {
  return <Text>Message</Text>;
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

  const drawNavigator = (
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
  );

  const tabNavigator = (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00', // 하단 탭 액티브 색깔
        tabBarShowLabel: false // 하단 탭 텍스트 보여주기 유무
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenForBottomNavigator}
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreenForBottomNavigator}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreenForBottomNavigator}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreenForBottomNavigator}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Main"
          component={Main}
          // 스택 네비게이터 헤더 비노출 처리, 비노출 안 시킬 경우 스택 & 하단탭 네비게이터 두개 동시에 보임
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen name="Main" component={MaterialMain} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
