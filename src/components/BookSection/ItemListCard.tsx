import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Box,
  HStack,
  Image,
  Pressable,
  Text,
  useToken,
} from '@gluestack-ui/themed';

import {GET_COVER_API} from 'src/constants/api';

type Props = {
  id: string;
  title: string;
  author: string;
  cover_id: number;
};

const ItemListCard = ({author, title, cover_id}: Props) => {
  const gray = useToken('colors', 'blueGray600');

  return (
    <Pressable>
      <Box
        borderRadius={12}
        sx={{_light: {bg: '$blueGray200'}, _dark: {bg: '$blueGray700'}}}>
        <HStack gap={10} alignItems="center">
          {cover_id ? (
            <Image
              alt={title}
              source={{uri: `${GET_COVER_API}/id/${cover_id}-M.jpg`}}
              w={80}
              h={100}
              borderRadius={10}
            />
          ) : (
            <Box
              w={80}
              h={100}
              bg="$blueGray200"
              borderRadius={10}
              justifyContent="center"
              alignItems="center">
              <FontAwesome name="book" size={30} color={gray} />
            </Box>
          )}
          <Box alignItems="flex-start">
            <Text
              w="80%"
              fontSize={16}
              fontWeight="$medium"
              numberOfLines={2}
              sx={{_light: {color: '$black'}}}>
              {title}
            </Text>
            <Text w="80%" fontSize={14} fontWeight="$light" numberOfLines={1}>
              {author}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default ItemListCard;
