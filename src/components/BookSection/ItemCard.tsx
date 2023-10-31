import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Box, Image, Pressable, Text, useToken} from '@gluestack-ui/themed';

import {GET_COVER_API} from 'src/constants/api';

type Props = {
  id: string;
  title: string;
  author: string;
  cover_id: number;
};

const ItemCard = ({author, title, cover_id}: Props) => {
  const gray = useToken('colors', 'blueGray600');
  return (
    <Pressable>
      <Box
        w={120}
        h={200}
        p={12}
        mt={30}
        borderRadius={12}
        sx={{_light: {bg: '$blueGray200'}, _dark: {bg: '$blueGray700'}}}>
        <Box top={-30}>
          {cover_id ? (
            <Image
              alt={title}
              source={{uri: `${GET_COVER_API}/id/${cover_id}-M.jpg`}}
              w={100}
              h={140}
              borderRadius={8}
            />
          ) : (
            <Box
              w={100}
              h={140}
              bg="$blueGray200"
              borderRadius={8}
              justifyContent="center"
              alignItems="center">
              <FontAwesome name="book" size={30} color={gray} />
            </Box>
          )}
          <Box h={70} justifyContent="space-between">
            <Text
              mt={10}
              fontSize={14}
              fontWeight="$medium"
              numberOfLines={2}
              sx={{_light: {color: '$black'}}}>
              {title}
            </Text>
            <Text mt={-5} fontSize={12} fontWeight="$light" numberOfLines={1}>
              {author}
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ItemCard;
