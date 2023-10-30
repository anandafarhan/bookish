import {ScrollView, Spinner, Text} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, XStack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const SpinnerExampleScreen = () => {
  const sizes = ['small', 'large'];
  return (
    <SafeAreaView>
      <AppBar start="back" title="Spinner Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Spinner Sizes">
          {sizes.map(size => (
            <XStack
              key={size}
              w={150}
              justifyContent="space-between"
              alignSelf="center"
              gap={10}>
              <Text fontWeight="$medium">{size}</Text>
              {/** @ts-ignore */}
              <Spinner size={size} />
            </XStack>
          ))}
        </Frame>

        <Frame title="Spinner Customization">
          <YStack space="md">
            <Spinner color="$indigo600" size="large" />
            <Spinner color="$emerald600" size="large" />
            <Spinner color="$amber600" size="large" />
            <Spinner color="$fuchsia600" size="large" />
          </YStack>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpinnerExampleScreen;
