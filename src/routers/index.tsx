import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Styles from 'src/styles';
import Home from 'src/modules/dashboard/home/Home';
import BookingsScreen from 'src/modules/dashboard/bookings/Bookings';
import SavedBookScreen from 'src/modules/dashboard/saved/Saved';

import {screenOptions} from './routerConfig';
import {RootStackParamList} from './routerType';
import {useColorScheme} from 'react-native';

export type StackProps = NativeStackScreenProps<RootStackParamList>;

const AppStack = createNativeStackNavigator<RootStackParamList>();
const TabStack = createBottomTabNavigator<RootStackParamList>();

const HomeTabBarStack = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TabStack.Navigator
      initialRouteName="dashboard/home"
      backBehavior="initialRoute"
      screenOptions={{
        ...screenOptions,
        tabBarStyle: [
          Styles.tabBarStyle,
          {
            backgroundColor: isDarkMode ? '#1e293b' : '#FFFFFF',
            borderColor: isDarkMode ? '#1e293b' : '#FFFFFF',
          },
        ],
        tabBarItemStyle: Styles.tabStyle,
        // tabBarButton: BottomTabBarButton,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: isDarkMode ? '#FAFAFA' : '#272727',
        tabBarInactiveTintColor: isDarkMode ? '#FAFAFA' : '#272727',
        tabBarIconStyle: Styles.tabBarIconStyle,
      }}>
      <TabStack.Screen
        name="dashboard/home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, ...props}) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} {...props} />
          ),
        }}
      />
      <TabStack.Screen
        name="dashboard/bookings"
        component={BookingsScreen}
        options={{
          title: 'Bookings',
          tabBarIcon: ({focused, ...props}) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} {...props} />
          ),
        }}
      />
      <TabStack.Screen
        name="dashboard/saved"
        component={SavedBookScreen}
        options={{
          title: 'Saved',
          tabBarIcon: ({focused, ...props}) => (
            <Ionicons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              {...props}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

const Router = () => {
  return (
    <AppStack.Navigator
      screenOptions={{...screenOptions}}
      initialRouteName="dashboard">
      <AppStack.Screen name="dashboard" component={HomeTabBarStack} />
      {/* <AppStack.Screen name="inappbrowser" component={Home} /> */}
    </AppStack.Navigator>
  );
};

export default Router;
