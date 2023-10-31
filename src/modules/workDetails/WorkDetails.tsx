import React from 'react';
import {ScrollView} from 'react-native';
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Heading,
  Image,
  Text,
  useToken,
} from '@gluestack-ui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Styles from 'src/styles';
import AppBar from 'src/components/AppBar';
import {GET_COVER_API} from 'src/constants/api';
import {SafeAreaView} from 'src/core/components/native';
import {RootStackParamList} from 'src/routers/routerType';
import ScreenSpinner from 'src/components/Spinner/ScreenSpinner';
import Library, {
  IGetAuthorResponse,
  IGetWorkRatingResponse,
  IGetWorkResponse,
} from 'src/service/Library';

type Props = NativeStackScreenProps<RootStackParamList, 'work-details'>;

const WorkDetailScreen = ({route, navigation}: Props) => {
  const gray = useToken('colors', 'blueGray600');
  const [workDetail, setWorkDetail] = React.useState<
    IGetWorkResponse | undefined
  >();
  const [editionSize, setEditionSize] = React.useState(0);
  const [workRating, setWorkRating] = React.useState<
    IGetWorkRatingResponse | undefined
  >();
  const [authorDetail, setAuthorDeatil] = React.useState<
    IGetAuthorResponse | undefined
  >();
  const {key} = route?.params;
  const workOLID = key.replace('/works/', '');

  const fetchWorkDetail = async () => {
    const response = await Library.getWork(workOLID);

    if (response?.status === 200) {
      setWorkDetail(response?.data);

      const authorOLID = response?.data?.authors[0].author?.key.replace(
        '/authors/',
        '',
      );
      fetchAuthorDetail(authorOLID);
      fetchWorkRating(workOLID);
      fetchWorkEditions(workOLID);
    } else {
      navigation.goBack();
    }
  };

  const fetchAuthorDetail = async (olid: string) => {
    const response = await Library.getAuthor(olid);

    if (response?.status === 200) {
      setAuthorDeatil(response?.data);
    }
  };

  const fetchWorkEditions = async (olid: string) => {
    const response = await Library.getWorkEdition({olid, limit: 1});

    if (response?.status === 200) {
      setEditionSize(response?.data?.size);
    }
  };

  const fetchWorkRating = async (olid: string) => {
    const response = await Library.getWorkRating(olid);

    if (response?.status === 200) {
      setWorkRating(response?.data);
    }
  };

  React.useEffect(() => {
    fetchWorkDetail();
  }, []);

  return !workDetail ? (
    <ScreenSpinner />
  ) : (
    <SafeAreaView>
      <AppBar start="back" />
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
        <Box alignItems="center">
          {workDetail?.covers?.[0] ? (
            <Image
              alt={workDetail?.title}
              source={{
                uri: `${GET_COVER_API}/id/${workDetail?.covers?.[0]}-M.jpg`,
              }}
              w={200}
              h={300}
              borderRadius={8}
            />
          ) : (
            <Box
              w={200}
              h={300}
              bg="$blueGray200"
              borderRadius={8}
              justifyContent="center"
              alignItems="center">
              <FontAwesome name="book" size={30} color={gray} />
            </Box>
          )}
        </Box>
        <Box px={20} py={20}>
          <Heading>{workDetail?.title}</Heading>

          {authorDetail ? (
            <Text fontWeight="$medium">{authorDetail?.name}</Text>
          ) : undefined}

          {workRating ? (
            <HStack mt={5} gap={5} alignItems="center">
              <FontAwesome name="star" size={18} color="#FFD400" />
              <Text fontSize={14}>
                {workRating?.summary?.average?.toFixed(1)}
              </Text>
            </HStack>
          ) : undefined}

          <Text mt={20} textAlign="justify">
            {typeof workDetail?.description === 'string'
              ? workDetail?.description
              : workDetail?.description?.value || 'No works description'}
          </Text>

          <Box gap={-5} mt={10}>
            <HStack gap={1}>
              <Text fontSize={12}>Publish Date:</Text>
              <Text fontSize={12}>{workDetail?.first_publish_date}</Text>
            </HStack>
            <HStack gap={1}>
              <Text fontSize={12}>Revision Number:</Text>
              <Text fontSize={12}>{workDetail?.revision}</Text>
            </HStack>
            <HStack gap={1}>
              <Text fontSize={12}>Editon Found:</Text>
              <Text fontSize={12}>{editionSize}</Text>
            </HStack>
          </Box>
          <Button
            mt={20}
            action="positive"
            onPress={() =>
              navigation.navigate('work-editions', {key: workOLID})
            }>
            <ButtonText>Browse Work Editions</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkDetailScreen;
