import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HStack, Pressable, Text, useToken} from '@gluestack-ui/themed';

const SearchBar = () => {
  const primary = useToken('colors', 'blueGray500');
  return (
    <Pressable>
      <HStack
        p={10}
        mt={20}
        mx={20}
        bg="$blueGray200"
        gap={10}
        borderRadius={10}
        alignItems="center">
        <Ionicons name="search" size={20} color={primary} />
        <Text color={primary}>Search here</Text>
      </HStack>
    </Pressable>
  );
};

export default SearchBar;