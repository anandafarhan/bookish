import React from 'react';
import {SafeAreaView, Stack} from '@core/components/native';
import {
  Button,
  ButtonText,
  Heading,
  Image,
  ScrollView,
} from '@gluestack-ui/themed';
import useAppNavigation from 'src/hooks/useAppNavigation';
import images from 'src/assets/images';

const DemoHomeScreen = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView flex={1} position="relative">
      <Image
        alt="meteor-logo"
        source={images.img_meteor_red}
        position="absolute"
        alignSelf="center"
        width={280}
        resizeMode="contain"
        top="50%"
        opacity={0.3}
        zIndex={-1}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Heading marginTop={15} textAlign="center">
          React Native 0.72
        </Heading>
        <Stack p={30} gap={10}>
          <Button
            size="lg"
            variant="solid"
            action="primary"
            onPress={() => navigation.navigate('example')}>
            <ButtonText>Components Example</ButtonText>
          </Button>
          <Button
            size="lg"
            variant="solid"
            action="primary"
            onPress={() => navigation.navigate('example')}
            isDisabled>
            <ButtonText fontSize={16}>
              Screens Example (work in progress)
            </ButtonText>
          </Button>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DemoHomeScreen;
