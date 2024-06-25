import React, {useRef} from 'react';
import {AppState} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

// screens
import {StartScreen} from 'screens';

// routes
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackType>();
export const navigationRef = createNavigationContainerRef<RootStackType>();

const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {backgroundColor: '#FFF5ED'},
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

const Layout = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Root />
    </NavigationContainer>
  );
};

export default Layout;
