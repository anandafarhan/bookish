import React from 'react';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import {FlatList, Pressable, StyleSheet} from 'react-native';

import ItemCard from './ItemCard';
import ItemListCard from './ItemListCard';

type Props = {title: string; onSeeMore?: () => void; vertical?: boolean};

const BookSection = ({title, onSeeMore, vertical}: Props) => {
  return (
    <>
      <Box px={20} mt={30}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={20} fontWeight="$bold" color="$black">
            {title}
          </Text>
          <Pressable onPress={onSeeMore}>
            <Text fontSize={14} fontWeight="$medium" color="$blueGray500">
              See more
            </Text>
          </Pressable>
        </HStack>
      </Box>
      {!vertical ? (
        <FlatList
          data={Array(5).fill('')}
          renderItem={() => (
            <ItemCard id="aa" title="Book Title" author="Book author" />
          )}
          contentContainerStyle={styles.containerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      ) : (
        <Box px={20} py={10} gap={15}>
          {Array(5)
            .fill('')
            .map((i, idx) => (
              <ItemListCard
                key={idx}
                id="aa"
                title="Book Title"
                author="Book author"
              />
            ))}
        </Box>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    gap: 15,
    paddingHorizontal: 20,
  },
});

export default BookSection;
