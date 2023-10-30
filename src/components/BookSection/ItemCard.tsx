import React from 'react';
import {Box, Image, Pressable, Text} from '@gluestack-ui/themed';

import images from 'src/assets/images';

type Props = {id: string | number; title: string; author: string};

const ItemCard = ({author, title}: Props) => {
  return (
    <Pressable>
      <Box w={120} h={180} p={12} mt={30} bg="$blueGray200" borderRadius={12}>
        <Box top={-30}>
          <Image
            alt={title}
            source={images.book_cover}
            w={100}
            h={140}
            borderRadius={8}
          />
          <Text mt={10} fontSize={14} fontWeight="$medium" color="$black">
            {title}
          </Text>
          <Text mt={-5} fontSize={12} fontWeight="$light">
            {author}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ItemCard;
