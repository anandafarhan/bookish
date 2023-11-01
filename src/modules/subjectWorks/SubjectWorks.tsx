import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  useToken,
} from '@gluestack-ui/themed';

import Styles from 'src/styles';
import {GET_COVER_API} from 'src/constants/api';
import {SafeAreaView} from 'src/core/components/native';
import {RootStackParamList} from 'src/routers/routerType';
import Library, {IGetSubjectsResponse} from 'src/service/Library';
import {useColorScheme} from 'react-native';
import AppBar from 'src/components/AppBar';
import ScreenSpinner from 'src/components/Spinner/ScreenSpinner';

type Props = NativeStackScreenProps<RootStackParamList, 'subject-works'>;

const SubjectWorksScreen = ({route, navigation}: Props) => {
  const {subject} = route?.params;
  const isDarkMode = useColorScheme() === 'dark';
  const gray = useToken('colors', 'blueGray600');
  const [size, setSize] = React.useState(0);
  const [qOffset, setQOffset] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<IGetSubjectsResponse['works']>([]);

  const pageLimit = 4;
  const currPage = qOffset === 0 ? 1 : qOffset / pageLimit + 1;
  const maxPage = Math.trunc(size / pageLimit);
  const fetchData = async (offset: number = 0) => {
    setIsLoading(true);
    const response = await Library.getSubject({
      subject: subject.toLowerCase(),
      limit: pageLimit,
      offset,
    });

    if (response?.status === 200) {
      setQOffset(offset);
      setSize(response?.data?.work_count);
      setData(response?.data?.works);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView flex={1}>
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
        <AppBar title={`${subject} Works`} start="back" />
        <Box flex={1}>
          {isLoading ? (
            <ScreenSpinner />
          ) : (
            <Box
              flex={1}
              px={20}
              flexWrap="wrap"
              flexDirection="row"
              gap={15}
              justifyContent="space-evenly">
              {data.map(({cover_id, title, authors, key}) => (
                <Pressable
                  key={key}
                  onPress={() =>
                    navigation.navigate('work-details', {
                      key: key?.replace('/works/', ''),
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
                      {cover_id ? (
                        <Image
                          alt={title}
                          source={{
                            uri: `${GET_COVER_API}/id/${cover_id}-M.jpg`,
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
                        <Text
                          mt={-5}
                          fontSize={12}
                          fontWeight="$light"
                          numberOfLines={1}>
                          {authors?.[0]?.name}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Pressable>
              ))}
            </Box>
          )}
        </Box>
        <HStack py={20} gap={80} justifyContent="center" alignItems="center">
          <Pressable
            p={10}
            bg="$coolGray300"
            borderRadius={8}
            sx={{_light: {bg: '$blueGray300'}, _dark: {bg: '$coolGray700'}}}
            onPress={() => fetchData(qOffset - pageLimit)}
            disabled={isLoading || qOffset < pageLimit}
            opacity={isLoading || qOffset < pageLimit ? 0.5 : 1}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={isDarkMode ? '#FAFAFA' : '#000'}
            />
          </Pressable>

          <Text w={80} fontSize={18} fontWeight="$bold" textAlign="center">
            {currPage}/{maxPage}
          </Text>

          <Pressable
            p={10}
            bg="$coolGray300"
            borderRadius={8}
            sx={{_light: {bg: '$blueGray300'}, _dark: {bg: '$coolGray700'}}}
            onPress={() => fetchData(qOffset + pageLimit)}
            disabled={isLoading || currPage >= maxPage}
            opacity={isLoading || currPage >= maxPage ? 0.5 : 1}>
            <Ionicons
              name="arrow-forward"
              size={24}
              color={isDarkMode ? '#FAFAFA' : '#000'}
            />
          </Pressable>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubjectWorksScreen;
