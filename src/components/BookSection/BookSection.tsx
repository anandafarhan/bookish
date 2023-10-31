import React, {useEffect} from 'react';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import {FlatList, Pressable, StyleSheet} from 'react-native';

import ItemCard from './ItemCard';
import ItemListCard from './ItemListCard';
import Library, {IGetSubjectsResponse} from 'src/service/Library';
import useAppNavigation from 'src/hooks/useAppNavigation';

type Props = {
  subject: string;
  limit?: number;
  onSeeMore?: () => void;
  vertical?: boolean;
};

const BookSection = ({subject, limit = 5, vertical}: Props) => {
  const navigation = useAppNavigation();
  const [data, setData] = React.useState<IGetSubjectsResponse['works']>([]);

  const fetchData = async () => {
    const response = await Library.getSubject({
      subject: subject.toLowerCase(),
      limit,
    });

    if (response?.status === 200) {
      setData(response?.data?.works);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data?.length < 1) {
    return undefined;
  }

  return (
    <>
      <Box px={20} mt={30}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize={20} fontWeight="$bold">
            {subject}
          </Text>
          <Pressable
            onPress={() => navigation.navigate('subject-works', {subject})}>
            <Text
              fontSize={14}
              fontWeight="$medium"
              sx={{_light: {color: '$blueGray500'}}}>
              See more
            </Text>
          </Pressable>
        </HStack>
      </Box>
      {!vertical ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemCard
              keyId={item.key}
              title={item?.title}
              author={item?.authors?.[0]?.name}
              cover_id={item.cover_id}
            />
          )}
          contentContainerStyle={styles.containerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      ) : (
        <Box px={20} py={10} gap={15}>
          {data.map(item => (
            <ItemListCard
              key={item.key}
              keyId={item.key}
              title={item?.title}
              author={item?.authors?.[0]?.name}
              cover_id={item.cover_id}
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
