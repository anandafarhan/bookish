import React from 'react';
import {Center, Heading} from '@gluestack-ui/themed';
import {Stack} from 'src/core/components/native';
import {useColorScheme} from 'react-native';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Frame = ({title, children}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Stack
      mt={15}
      pt={30}
      gap={10}
      borderWidth={2}
      borderColor={isDarkMode ? '$blueGray800' : '$blueGray300'}
      borderRadius={10}>
      <Stack gap={5} px={30} justifyContent="space-between">
        {children}
      </Stack>

      <Center
        mt={20}
        py={10}
        bg={isDarkMode ? '$blueGray700' : '$blueGray200'}
        borderTopWidth={2}
        borderColor={isDarkMode ? '$blueGray800' : '$blueGray300'}
        borderBottomEndRadius={10}
        borderBottomStartRadius={10}>
        <Heading>{title}</Heading>
      </Center>
    </Stack>
  );
};

export default Frame;
