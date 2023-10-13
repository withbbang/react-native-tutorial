import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1 열기"
        onPress={() =>
          navigation.push('Detail', {
            data: 1
          })
        }
      />
    </View>
  );
}

function Notification() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}

function Message() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}

function Search() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

export default function MaterialMain() {
  return (
    // createMaterialTopTabNavigator의 경우 createBottomTabNavigator와 달리 아이콘의 크기를 정해주지 않아 직접 지정해야한다.
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarShowLabel: false, // 하단 탭 텍스트 보여주기 유무
        tabBarActiveTintColor: '#009688', // 하단 탭 액티브 색깔
        tabBarIndicatorStyle: {
          backgroundColor: '#009688'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={24} />
          )
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: '메세지',
          tabBarIcon: ({ color }) => (
            <Icon name="message" color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
