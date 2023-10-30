import React from 'react';
import {Box, HStack, Image, Pressable, Text} from '@gluestack-ui/themed';

import images from 'src/assets/images';

type Props = {id: string | number; title: string; author: string};

const ItemListCard = ({author, title}: Props) => {
  return (
    <Pressable>
      <Box bg="$blueGray200" borderRadius={12}>
        <HStack gap={10} alignItems="center">
          <Image
            alt={title}
            source={images.book_cover}
            w={80}
            h={100}
            borderRadius={8}
          />
          <Box alignItems="flex-start">
            <Text fontSize={16} fontWeight="$medium" color="$black">
              {title}
            </Text>
            <Text fontSize={14} fontWeight="$light">
              {author}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default ItemListCard;
