import React from 'react';
import {
  Box,
  HStack,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';

import {SafeAreaView} from 'src/core/components/native';
import Styles from 'src/styles';
import images from 'src/assets/images';
import {FlatList, StyleSheet} from 'react-native';

const status = [
  {
    label: 'Submitted',
    key: 'submitted',
  },
  {
    label: 'Picked',
    key: 'picked',
  },
  {
    label: 'Completed',
    key: 'completed',
  },
  {
    label: 'Cancelled',
    key: 'cancelled',
  },
];

const BookingsScreen = () => {
  const [statusFilter, setStatusFilter] = React.useState('submitted');
  return (
    <SafeAreaView flex={1}>
      <Heading ml={20} my={10} fontSize={22}>
        Your Bookings
      </Heading>
      <FlatList
        data={status}
        renderItem={({item}) => (
          <Pressable onPress={() => setStatusFilter(item.key)}>
            <Box
              pt={2}
              pb={5}
              px={10}
              borderRadius={8}
              borderWidth={1}
              bg={statusFilter === item.key ? '$blueGray200' : undefined}
              borderColor={
                statusFilter === item.key ? '$blueGray500' : '$blueGray400'
              }>
              <Text
                fontSize={12}
                color={
                  statusFilter === item.key ? '$blueGray800' : '$blueGray400'
                }>
                {item.label}
              </Text>
            </Box>
          </Pressable>
        )}
        contentContainerStyle={style.containerStyle}
        horizontal
      />
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
        <Box px={20} gap={15}>
          {Array(6)
            .fill('')
            .map(() => (
              <Pressable
                bg="$white"
                borderRadius={12}
                borderWidth={1}
                borderColor="$blueGray300">
                <HStack gap={10} alignItems="center">
                  <Image
                    alt="title"
                    source={images.book_cover}
                    w={80}
                    h={100}
                    borderRadius={10}
                  />
                  <Box w="70%">
                    <HStack justifyContent="space-between" alignItems="center">
                      <Text fontSize={16} fontWeight="$medium" color="$black">
                        Book Title
                      </Text>
                      <Box
                        bg="$green100"
                        px={10}
                        borderRadius={6}
                        justifyContent="center"
                        alignItems="center">
                        <Text fontSize={12} color="$green500">
                          Picked
                        </Text>
                      </Box>
                    </HStack>
                    <Text fontSize={14} fontWeight="$light">
                      Book Author
                    </Text>
                    <HStack mt={10} gap={5}>
                      <Text fontSize={12} color="$blue500">
                        GoodBooks
                      </Text>
                      <Text>-</Text>
                      <Text fontSize={12} color="black">
                        12:00 PM
                      </Text>
                      <Text>-</Text>
                      <Text fontSize={12} color="black">
                        25 Dec 2023
                      </Text>
                    </HStack>
                  </Box>
                </HStack>
              </Pressable>
            ))}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
});

export default BookingsScreen;
