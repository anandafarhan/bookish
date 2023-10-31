import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, HStack, Pressable, ScrollView, Text} from '@gluestack-ui/themed';

import Styles from 'src/styles';
import {SafeAreaView} from 'src/core/components/native';
import {RootStackParamList} from 'src/routers/routerType';
import Library, {IGetEditionsResponse} from 'src/service/Library';
import {useColorScheme} from 'react-native';
import AppBar from 'src/components/AppBar';
import ScreenSpinner from 'src/components/Spinner/ScreenSpinner';
import EditionCard from './components/EditionCard';

type Props = NativeStackScreenProps<RootStackParamList, 'work-editions'>;

const WorkEditionScreen = ({route}: Props) => {
  const {key: olid} = route?.params;
  const isDarkMode = useColorScheme() === 'dark';
  const [qOffset, setQOffset] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<IGetEditionsResponse['entries']>([]);

  const pageLimit = 4;
  const currPage = qOffset === 0 ? 1 : qOffset / pageLimit + 1;
  const fetchData = async (offset: number = 0) => {
    setIsLoading(true);
    const response = await Library.getWorkEdition({
      olid,
      limit: pageLimit,
      offset,
    });

    if (response?.status === 200) {
      setQOffset(offset);
      setData(response?.data?.entries);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView flex={1}>
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
        <AppBar title="Work Editions" start="back" />
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
              {data.map(item => (
                <EditionCard key={item?.key} data={item} />
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
            disabled={isLoading || qOffset < pageLimit}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={isDarkMode ? '#FAFAFA' : '#000'}
            />
          </Pressable>

          <Text w={30} fontSize={20} fontWeight="$bold" textAlign="center">
            {currPage}
          </Text>

          <Pressable
            p={10}
            bg="$coolGray300"
            borderRadius={8}
            sx={{_light: {bg: '$blueGray300'}, _dark: {bg: '$coolGray700'}}}
            onPress={() => fetchData(qOffset + pageLimit)}
            disabled={isLoading}>
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

export default WorkEditionScreen;
