import React, {useEffect} from 'react';
import {Image as IMG} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Box, Image, Pressable, Text, useToken} from '@gluestack-ui/themed';

import {GET_COVER_API} from 'src/constants/api';
import useAppNavigation from 'src/hooks/useAppNavigation';
import Library, {
  IGetAuthorResponse,
  IGetEditionsResponse,
} from 'src/service/Library';

type Props = {
  data: IGetEditionsResponse['entries'][0];
};

const EditionCard = ({data: {key, title, authors}}: Props) => {
  const navigation = useAppNavigation();
  const gray = useToken('colors', 'blueGray600');
  const bookOLID = key.replace('/books/', '');
  const [fallback, setFallback] = React.useState(false);
  const [authorDetail, setAuthorDeatil] = React.useState<
    IGetAuthorResponse | undefined
  >();

  const fetchAuthorDetail = async () => {
    const response = await Library.getAuthor(
      //@ts-ignore
      authors[0].key.replace('/authors/', ''),
    );

    if (response?.status === 200) {
      setAuthorDeatil(response?.data);
    }
  };

  IMG.getSize(`${GET_COVER_API}/olid/${bookOLID}-M.jpg`, width => {
    if (width < 10) {
      setFallback(true);
    }
  });

  useEffect(() => {
    if (authors?.[0]?.key) {
      fetchAuthorDetail();
    }
  }, []);

  console.log('COVER', `${GET_COVER_API}/olid/${bookOLID}-M.jpg`);

  return (
    <Pressable
      key={key}
      onPress={() =>
        navigation.navigate('book-details', {
          key: key?.replace('/books/', ''),
        })
      }>
      <Box
        w={150}
        h={260}
        p={12}
        mt={30}
        borderRadius={12}
        sx={{
          _light: {bg: '$blueGray200'},
          _dark: {bg: '$blueGray700'},
        }}>
        <Box top={-30}>
          {!fallback ? (
            <Image
              alt={title}
              source={{
                uri: `${GET_COVER_API}/olid/${bookOLID}-M.jpg`,
              }}
              w="$full"
              h={200}
              borderRadius={8}
            />
          ) : (
            <Box
              w="$full"
              h={200}
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
              {authorDetail?.name}
            </Text>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default EditionCard;
