import React from 'react';
import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '@rneui/themed';

// screens
import {Category, Favorite, Home, Profile} from 'screens';

// utils
import {OS} from 'utils/utility';

const Tab = createBottomTabNavigator<BottomTabTypes>();

const BottomTabs = () => {
  const {colors} = useTheme().theme;

  const renderTabBarIcon =
    (name: string) =>
    ({focused}: {focused: boolean}) =>
      (
        <Icon
          name={name}
          size={20}
          color={focused ? colors.primary : colors.grey0}
          solid
        />
      );

  const renderTabBarLabel =
    (label: string) =>
    ({focused}: {focused: boolean}) =>
      <Text color={focused ? colors.primary : colors.grey0}>{label}</Text>;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitle: '',
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {backgroundColor: '#FFF5ED'},
        tabBarStyle: {
          height: OS === 'ios' ? 85 : 60,
          paddingBottom: OS === 'ios' ? 30 : 10,
          paddingTop: 7,
          borderTopWidth: 0.5,
          borderColor: 'rgba(60, 60, 67, 0.36)',
          elevation: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8);',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: renderTabBarIcon('shop'),
          tabBarLabel: renderTabBarLabel('Home'),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: renderTabBarIcon('grip-vertical'),
          tabBarLabel: renderTabBarLabel('Category'),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: renderTabBarIcon('heart'),
          tabBarLabel: renderTabBarLabel('Favorite'),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: renderTabBarIcon('user-large'),
          tabBarLabel: renderTabBarLabel('Profile'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const Text = styled.Text<{color: string}>`
  font-size: 10px;
  font-weight: 600;
  color: ${({color}) => color};
  text-align: center;
  margin-top: 4px;
`;
