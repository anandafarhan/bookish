import React from 'react';
import {SafeAreaView, Stack} from '@core/components/native';
import {Button, ButtonText, Heading, ScrollView} from '@gluestack-ui/themed';
import useAppNavigation from 'src/hooks/useAppNavigation';

const Home = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView flex={1}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Heading marginTop={15} textAlign="center">
          React Native 0.72
        </Heading>
        <Stack p={30}>
          <Button
            size="lg"
            variant="solid"
            action="primary"
            onPress={() => navigation.navigate('example')}>
            <ButtonText>Components Example</ButtonText>
          </Button>
        </Stack>
        {/* {Array(50)
          .fill('')
          .map((_, index) => (
            <AnimatedView
              key={index.toString()}
              bg="white"
              borderRadius={16}
              shadow="mediumShadow"
              alignItems="center"
              paddingBottom={10}
              entering={BounceIn.duration(500).delay(index * 50)}>
              <AnimatedImage
                source={images.img_meteor_red_animated}
                width={150}
                height={150}
                resizeMode="contain"
                borderRadius={16}
              />
              <AnimatedText color="#000">Image {index + 1}</AnimatedText>
            </AnimatedView>
          ))} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
