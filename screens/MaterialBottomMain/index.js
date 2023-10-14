import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, Text, View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

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

export default function MaterialBottomMain() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true} // 해당 prop === true여야 활성화된 탭만 이름을 보여준다
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarBadge: 'new',
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
          tabBarBadge: 39,
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
          tabBarBadge: true,
          tabBarIcon: ({ color }) => (
            <Icon name="message" color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
