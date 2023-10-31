import React from 'react';
import {Pressable, Text} from '@gluestack-ui/themed';
import Octicons from 'react-native-vector-icons/Octicons';

import {XStack} from 'src/core/components/native';
import useAppNavigation from 'src/hooks/useAppNavigation';
import {useColorScheme} from 'react-native';

type Props = {
  start?: React.ReactNode | 'back' | 'close';
  end?: React.ReactNode | 'close';
  title?: string;
  centerTitle?: boolean;
};

const AppBar = ({title, centerTitle, start, end}: Props) => {
  const navigation = useAppNavigation();
  const goBack = () => navigation.goBack();
  const isDarkMode = useColorScheme() === 'dark';
  const startComponent = () => {
    switch (start) {
      case 'back':
        return (
          <Pressable px={15} py={10} onPress={goBack}>
            <Octicons
              size={30}
              name="arrow-left"
              color={isDarkMode ? '#FAFAFA' : '#000'}
            />
          </Pressable>
        );
      case 'close':
        return (
          <Pressable px={15} py={10} onPress={goBack}>
            <Octicons
              size={30}
              name="x"
              color={isDarkMode ? '#FAFAFA' : '#000'}
            />
          </Pressable>
        );
      default:
        return start;
    }
  };

  const endComponent = () => {
    switch (end) {
      case 'close':
        return (
          <Pressable px={15} py={10} onPress={goBack}>
            <Octicons
              size={30}
              name="x"
              color={isDarkMode ? '#FAFAFA' : '#000'}
            />
          </Pressable>
        );
      default:
        return end;
    }
  };
  return (
    <XStack alignItems="center" justifyContent="space-between" zIndex={999}>
      <XStack alignItems="center" flex={1}>
        {startComponent()}
        <Text
          flex={1}
          fontSize={18}
          fontWeight="500"
          textAlign={centerTitle ? 'center' : undefined}>
          {title}
        </Text>
      </XStack>
      <XStack minWidth={45}>{endComponent()}</XStack>
    </XStack>
  );
};

export default AppBar;
