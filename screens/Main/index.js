import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Home() {
  /**
   * Home 스크린이 처음 떴을 때만 mounted log 찍힘
   * 일반적인 페이지 이동간에는 mounted / unmounted log가 찍히지 않는다.
   */
  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    };
  }, []);

  return (
    <View>
      <Text>Home</Text>
      {/* <Button
        title="Detail 1 열기"
        onPress={() =>
          navigation.push('Detail', {
            data: 1
          })
        }
      /> */}
      <OpenDetailButton />
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

function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', { data: 1 })}
    />
  );
}

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fb8c00', // 하단 탭 액티브 색깔
        tabBarShowLabel: false // 하단 탭 텍스트 보여주기 유무
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          title: '알림',
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
