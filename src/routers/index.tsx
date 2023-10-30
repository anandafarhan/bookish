import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Styles from 'src/styles';
import Home from 'src/modules/dashboard/home/Home';
import BottomTabBarButton from 'src/components/BottomTabBarButton/BottomTabBarButton';

import {screenOptions} from './routerConfig';
import {ExampleStackParamList, RootStackParamList} from './routerType';
import ExampleScreen from 'src/modules/example';
import ButtonExampleScreen from 'src/modules/example/Button/Button';
import TextExampleScreen from 'src/modules/example/Text/Text';
import TextInputExampleScreen from 'src/modules/example/TextInput/TextInput';
import CheckboxExampleScreen from 'src/modules/example/Checkbox/Checkbox';
import RadioExampleScreen from 'src/modules/example/Radio/Radio';
import SelectExampleScreen from 'src/modules/example/Select/Select';
import SliderExampleScreen from 'src/modules/example/Slider/Slider';
import SwitchExampleScreen from 'src/modules/example/Switch/Switch';
import TextAreaExampleScreen from 'src/modules/example/TextArea/TextArea';
import AlertExampleScreen from 'src/modules/example/Alert/Alert';
import ProgressExampleScreen from 'src/modules/example/Progress/Progress';
import SpinnerExampleScreen from 'src/modules/example/Spinner/Spinner';
import ToastExampleScreen from 'src/modules/example/Toast/Toast';
import BadgeExampleScreen from 'src/modules/example/Badge/Badge';
import AlertDialogExampleScreen from 'src/modules/example/AlertDialog/AlertDialog';
import DemoHomeScreen from 'src/modules/demo/home/DemoHome';

export type StackProps = NativeStackScreenProps<RootStackParamList>;

const AppStack = createNativeStackNavigator<RootStackParamList>();
const ExampleStack = createNativeStackNavigator<ExampleStackParamList>();
const TabStack = createBottomTabNavigator<RootStackParamList>();

const HomeTabBarStack = () => (
  <TabStack.Navigator
    initialRouteName="example"
    backBehavior="initialRoute"
    screenOptions={{
      ...screenOptions,
      tabBarStyle: Styles.tabBarStyle,
      tabBarItemStyle: Styles.tabStyle,
      tabBarButton: BottomTabBarButton,
      tabBarHideOnKeyboard: true,
    }}>
    <TabStack.Screen
      name="dashboard/home"
      component={Home}
      options={{title: 'Home', tabBarAccessibilityLabel: 'Home'}}
    />
    {/* <TabStack.Screen
      name="dashboard/my-store"
      component={() => <></>}
      options={{title: 'My Store', tabBarAccessibilityLabel: 'My Store'}}
    />
    <TabStack.Screen
      name="dashboard/transactions"
      component={() => <></>}
      options={{
        title: 'Transaction',
        tabBarAccessibilityLabel: 'Transaction',
      }}
    /> */}
    <TabStack.Screen
      name="dashboard/account"
      component={Home}
      options={{title: 'Account', tabBarAccessibilityLabel: 'Account'}}
    />
  </TabStack.Navigator>
);

const ExampleStackNavigator = () => (
  <ExampleStack.Navigator
    initialRouteName="exampleList"
    screenOptions={{
      ...screenOptions,
    }}>
    <ExampleStack.Screen name="exampleList" component={ExampleScreen} />
    <ExampleStack.Screen
      name="example/button"
      component={ButtonExampleScreen}
    />
    <ExampleStack.Screen name="example/text" component={TextExampleScreen} />
    <ExampleStack.Screen
      name="example/text-input"
      component={TextInputExampleScreen}
    />
    <ExampleStack.Screen
      name="example/text-area"
      component={TextAreaExampleScreen}
    />
    <ExampleStack.Screen
      name="example/checkbox"
      component={CheckboxExampleScreen}
    />
    <ExampleStack.Screen name="example/radio" component={RadioExampleScreen} />
    <ExampleStack.Screen
      name="example/select"
      component={SelectExampleScreen}
    />
    <ExampleStack.Screen
      name="example/slider"
      component={SliderExampleScreen}
    />
    <ExampleStack.Screen
      name="example/switch"
      component={SwitchExampleScreen}
    />
    <ExampleStack.Screen name="example/alert" component={AlertExampleScreen} />
    <ExampleStack.Screen
      name="example/progress"
      component={ProgressExampleScreen}
    />
    <ExampleStack.Screen
      name="example/spinner"
      component={SpinnerExampleScreen}
    />
    <ExampleStack.Screen name="example/toast" component={ToastExampleScreen} />
    <ExampleStack.Screen name="example/badge" component={BadgeExampleScreen} />
    <ExampleStack.Screen
      name="example/alert-dialog"
      component={AlertDialogExampleScreen}
    />
  </ExampleStack.Navigator>
);

const Router = () => {
  return (
    <AppStack.Navigator
      screenOptions={{...screenOptions}}
      initialRouteName="demo-home">
      <AppStack.Screen name="demo-home" component={DemoHomeScreen} />
      <AppStack.Screen name="dashboard" component={HomeTabBarStack} />
      <AppStack.Screen name="example" component={ExampleStackNavigator} />
      {/* <AppStack.Screen name="inappbrowser" component={Home} /> */}
    </AppStack.Navigator>
  );
};

export default Router;
