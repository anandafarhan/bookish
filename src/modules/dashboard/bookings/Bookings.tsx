import React from 'react';
import dayjs from 'dayjs';
import {FlatList, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Box,
  HStack,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
  useToken,
} from '@gluestack-ui/themed';

import Styles from 'src/styles';
import {capitalize} from 'src/utils/utils';
import {SafeAreaView} from 'src/core/components/native';
import useLibrary, {BookingStatus} from 'src/stores/library';

const status = [
  {
    label: 'All',
    key: undefined,
  },
  {
    label: 'Submitted',
    key: BookingStatus.Submitted,
  },
  {
    label: 'Picked',
    key: BookingStatus.Picked,
  },
  {
    label: 'Completed',
    key: BookingStatus.Completed,
  },
  {
    label: 'Cancelled',
    key: BookingStatus.Cancelled,
  },
];

const statusStyle = (bookingStatus: BookingStatus) => {
  switch (bookingStatus) {
    case BookingStatus.Picked:
      return {
        bg: '$orange100',
        text: '$orange500',
      };
    case BookingStatus.Completed:
      return {
        bg: '$coolGray100',
        text: '$coolGray500',
      };
    case BookingStatus.Cancelled:
      return {
        bg: '$red100',
        text: '$red500',
      };
    default:
      return {
        bg: '$blue100',
        text: '$blue500',
      };
  }
};

const changeBookingStatus = (bookingStatus: BookingStatus) => {
  switch (bookingStatus) {
    case BookingStatus.Picked:
      return BookingStatus.Completed;
    case BookingStatus.Completed:
      return BookingStatus.Cancelled;
    case BookingStatus.Cancelled:
      return BookingStatus.Submitted;
    default:
      return BookingStatus.Picked;
  }
};

const BookingsScreen = () => {
  const gray = useToken('colors', 'blueGray600');
  const bookings = useLibrary(state => state.bookings);
  const updateBookingStatus = useLibrary(state => state.updateBookingStatus);
  const deleteBooking = useLibrary(state => state.deleteBookings);
  const [statusFilter, setStatusFilter] = React.useState<
    BookingStatus | undefined
  >();
  return (
    <SafeAreaView flex={1}>
      <Heading ml={20} my={10} fontSize={22}>
        Your Bookings
      </Heading>
      <FlatList
        data={status}
        renderItem={({item}) => (
          <Pressable onPress={() => setStatusFilter(item.key)}>
            <Box
              py={2}
              px={10}
              borderRadius={8}
              borderWidth={1}
              bg={statusFilter === item.key ? '$blueGray200' : undefined}
              borderColor={
                statusFilter === item.key ? '$blueGray500' : '$blueGray400'
              }>
              <Text
                fontSize={12}
                color={
                  statusFilter === item.key ? '$blueGray800' : '$blueGray400'
                }>
                {item.label}
              </Text>
            </Box>
          </Pressable>
        )}
        contentContainerStyle={style.containerStyle}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <ScrollView h="86%" contentContainerStyle={Styles.scrollViewContainer}>
        <Box flexGrow={1} px={20} gap={15}>
          {bookings.length < 1 ? (
            <Box flex={1} justifyContent="center" alignItems="center">
              <Heading>You have no booking yet</Heading>
            </Box>
          ) : (
            bookings
              .filter(item =>
                statusFilter ? item.status === statusFilter : true,
              )
              .map(item => (
                <Pressable
                  key={item.bookOLID}
                  borderRadius={12}
                  sx={{
                    _light: {bg: '$blueGray200'},
                    _dark: {bg: '$blueGray700'},
                  }}
                  delayLongPress={3000}
                  onLongPress={() => deleteBooking(item.bookOLID)}>
                  <HStack gap={10} alignItems="center">
                    {item?.cover ? (
                      <Image
                        alt={item.title}
                        source={{uri: item?.cover}}
                        w={80}
                        h={100}
                        borderRadius={10}
                      />
                    ) : (
                      <Box
                        w={80}
                        h={100}
                        bg="$blueGray200"
                        borderRadius={8}
                        justifyContent="center"
                        alignItems="center">
                        <FontAwesome name="book" size={30} color={gray} />
                      </Box>
                    )}
                    <Box w="70%">
                      <HStack
                        justifyContent="space-between"
                        alignItems="center">
                        <Text
                          w="70%"
                          fontSize={16}
                          fontWeight="$medium"
                          numberOfLines={2}
                          sx={{_light: {color: '$black'}}}>
                          {item.title}
                        </Text>
                        <Pressable
                          bg={statusStyle(item.status).bg}
                          px={10}
                          borderRadius={6}
                          justifyContent="center"
                          alignItems="center"
                          onPress={() =>
                            updateBookingStatus(
                              item.bookOLID,
                              changeBookingStatus(item.status),
                            )
                          }>
                          <Text
                            fontSize={12}
                            color={statusStyle(item.status).text}>
                            {capitalize(item.status)}
                          </Text>
                        </Pressable>
                      </HStack>
                      <Text fontSize={14} fontWeight="$light">
                        {item.author}
                      </Text>
                      <HStack mt={10} gap={2}>
                        <Text fontSize={12} color="$blue500">
                          {item.pickupLocation}
                        </Text>
                        <Text>-</Text>
                        <Text fontSize={12} sx={{_light: {color: '$black'}}}>
                          {dayjs(item.pickupDate).format('DD MMM YYYY')}
                        </Text>
                        <Text>-</Text>
                        <Text fontSize={12} sx={{_light: {color: '$black'}}}>
                          {item.pickupTime}
                        </Text>
                      </HStack>
                    </Box>
                  </HStack>
                </Pressable>
              ))
          )}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
});

export default BookingsScreen;
