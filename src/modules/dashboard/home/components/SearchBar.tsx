import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HStack, Pressable, Text, useToken} from '@gluestack-ui/themed';
import {useColorScheme} from 'react-native';

const SearchBar = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const primary = useToken(
    'colors',
    isDarkMode ? 'blueGray300' : 'blueGray500',
  );
  return (
    <Pressable>
      <HStack
        p={10}
        mx={20}
        gap={10}
        borderRadius={10}
        alignItems="center"
        sx={{_light: {bg: '$blueGray200'}, _dark: {bg: '$blueGray700'}}}>
        <Ionicons name="search" size={20} color={primary} />
        <Text color={primary}>Search here (cosmetic only)</Text>
      </HStack>
    </Pressable>
  );
};

export default SearchBar;
