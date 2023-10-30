import React from 'react';
import {Image, Text, useColorScheme} from 'react-native';
import {Pressable} from 'react-native';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

// menu
import MenuHomeActive from 'src/assets/icons/menus/home-active.png';
import MenuHomeInactive from 'src/assets/icons/menus/home-inactive.png';

import MenuTokosayaActive from 'src/assets/icons/menus/store-active.png';
import MenuTokosayaInactive from 'src/assets/icons/menus/store-inactive.png';

import MenuTransactionActive from 'src/assets/icons/menus/transaction-active.png';
import MenuTransactionInactive from 'src/assets/icons/menus/transaction-inactive.png';

import MenuAccountActive from 'src/assets/icons/menus/account-active.png';
import MenuAccountInactive from 'src/assets/icons/menus/account-inactive.png';

interface TabbarIconType {
  Home: ImageSourcePropType;
  Transaction: ImageSourcePropType;
  'My Store': ImageSourcePropType;
  Account: ImageSourcePropType;
}

const tabBarActive: TabbarIconType = {
  Home: MenuHomeActive,
  Transaction: MenuTransactionActive,
  'My Store': MenuTokosayaActive,
  Account: MenuAccountActive,
};
const tabBarInactive: TabbarIconType = {
  Home: MenuHomeInactive,
  Transaction: MenuTransactionInactive,
  'My Store': MenuTokosayaInactive,
  Account: MenuAccountInactive,
};

const BottomTabBarButton: React.FC<BottomTabBarButtonProps> = ({
  onPress,
  accessibilityState,
  accessibilityLabel,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        styles.buttonWrapper,
        {backgroundColor: isDarkMode ? '#333' : '#FAFAFA'},
      ]}>
      <Pressable onPress={e => onPress && onPress(e)} style={styles.button}>
        <Image
          source={
            accessibilityState?.selected
              ? //@ts-expect-error not-undefined
                tabBarActive[accessibilityLabel]
              : //@ts-expect-error not-undefined
                tabBarInactive[accessibilityLabel]
          }
          style={styles.imageMenu}
        />
        <Text
          style={{
            color: accessibilityState?.selected
              ? isDarkMode
                ? '#FAFAFA'
                : 'black'
              : isDarkMode
              ? '#B8B8B8'
              : 'gray',
            fontSize: 12,
            fontWeight: '700',
          }}>
          {accessibilityLabel}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageMenu: {
    height: 24,
    width: 24,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00A0E4',
  },
});

export default BottomTabBarButton;
