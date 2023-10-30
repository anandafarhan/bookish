import {
  Heading,
  Progress,
  ProgressFilledTrack,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, XStack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const ProgressExampleScreen = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  return (
    <SafeAreaView>
      <AppBar start="back" title="Progress Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Progress Sizes">
          {sizes.map(size => (
            <XStack
              key={size}
              justifyContent="space-between"
              alignItems="center"
              gap={10}>
              <Text fontWeight="$medium">{size}</Text>
              {/** @ts-ignore */}
              <Progress value={45} w={230} size={size}>
                <ProgressFilledTrack />
              </Progress>
            </XStack>
          ))}
        </Frame>

        <Frame title="Progress Customization">
          <YStack space="md">
            <Heading>Internal Storage</Heading>
            <Progress value={23} w="$full" h={16} bg="$lime100">
              <ProgressFilledTrack h={16} bg="$lime500" />
            </Progress>
            <Text size="md">
              <Text bold>Used: </Text>28GB
            </Text>
            <Text size="md">
              <Text bold>Free: </Text>98GB
            </Text>
          </YStack>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProgressExampleScreen;
