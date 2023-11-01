import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Box,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  useToken,
} from '@gluestack-ui/themed';

import useLibrary from 'src/stores/library';
import {SafeAreaView} from 'src/core/components/native';
import useAppNavigation from 'src/hooks/useAppNavigation';

const SavedBookScreen = () => {
  const navigation = useAppNavigation();
  const gray = useToken('colors', 'blueGray600');
  const savedBooks = useLibrary(state => state.savedBooks);
  return (
    <SafeAreaView flex={1}>
      <Heading ml={20} my={10} fontSize={22}>
        Saved Books
      </Heading>
      <ScrollView contentContainerStyle={styles.containerStyle}>
        {savedBooks.length < 1 ? (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Heading>You have no saved book yet</Heading>
          </Box>
        ) : (
          savedBooks.map(item => (
            <Pressable
              w="30%"
              onPress={() =>
                navigation.navigate('book-details', {key: item?.bookOLID})
              }>
              <Box
                h={190}
                p={12}
                mt={30}
                borderRadius={12}
                sx={{
                  _light: {bg: '$blueGray200'},
                  _dark: {bg: '$blueGray700'},
                }}>
                <Box top={-30}>
                  {item.cover ? (
                    <Image
                      alt="alt"
                      source={{uri: item.cover}}
                      w="$full"
                      h={130}
                      borderRadius={8}
                    />
                  ) : (
                    <Box
                      w="$full"
                      h={130}
                      bg="$blueGray200"
                      borderRadius={8}
                      justifyContent="center"
                      alignItems="center">
                      <FontAwesome name="book" size={30} color={gray} />
                    </Box>
                  )}
                  <Text
                    mt={10}
                    fontSize={14}
                    fontWeight="$medium"
                    numberOfLines={2}
                    sx={{_light: {color: '$black'}}}>
                    {item.title}
                  </Text>
                  <Text
                    mt={-5}
                    fontSize={12}
                    fontWeight="$light"
                    numberOfLines={1}>
                    {item.author}
                  </Text>
                </Box>
              </Box>
            </Pressable>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    gap: 16,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SavedBookScreen;
