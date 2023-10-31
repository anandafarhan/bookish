import React, {useRef} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import AppRoot from 'src/index';
import linking from 'src/utils/linking';
import rootNavigationRef from 'src/utils/rootNavigation';

import {config} from 'config/gluestack-ui.config';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const routeNameRef = useRef<string>();

  const onNavigationReady = () => {
    routeNameRef.current = rootNavigationRef.getCurrentRoute()?.name || '';
  };

  const onNavigationStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = rootNavigationRef.getCurrentRoute()?.name || '';

    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
      // await analytics().logScreenView({
      //   screen_name: currentRouteName,
      //   screen_class: currentRouteName,
      // });
    }
  };

  const RNavigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF3333',
      background: isDarkMode ? '#0f172a' : '#FAFAFA',
    },
  };

  return (
    <>
      <GluestackUIProvider
        config={config}
        colorMode={isDarkMode ? 'dark' : 'light'}>
        {/* <Theme name="classic"> */}
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000' : '#fff'}
        />
        <NavigationContainer
          ref={rootNavigationRef}
          linking={linking}
          theme={RNavigationTheme}
          onReady={onNavigationReady}
          onStateChange={onNavigationStateChange}>
          <AppRoot />
        </NavigationContainer>
        {/* </Theme> */}
      </GluestackUIProvider>
    </>
  );
}

export default App;
