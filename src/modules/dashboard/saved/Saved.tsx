import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  FlatList,
  Heading,
  Image,
  Pressable,
  Text,
} from '@gluestack-ui/themed';

import images from 'src/assets/images';
import {SafeAreaView} from 'src/core/components/native';

const SavedBookScreen = () => {
  return (
    <SafeAreaView flex={1}>
      <Heading ml={20} my={10} fontSize={22}>
        Saved Books
      </Heading>
      <FlatList
        data={Array(10).fill('')}
        numColumns={3}
        renderItem={() => (
          <Pressable w="30%" mr={18}>
            <Box h={170} p={12} mt={30} bg="$blueGray200" borderRadius={12}>
              <Box top={-30}>
                <Image
                  alt="alt"
                  source={images.book_cover}
                  w="$full"
                  h={130}
                  borderRadius={8}
                />
                <Text mt={10} fontSize={14} fontWeight="$medium" color="$black">
                  Book Title
                </Text>
                <Text mt={-5} fontSize={12} fontWeight="$light">
                  Book Author
                </Text>
              </Box>
            </Box>
          </Pressable>
        )}
        contentContainerStyle={styles.containerStyle}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    gap: 15,
    padding: 20,
  },
});

export default SavedBookScreen;
