import React from 'react';
import {ScrollView, useColorScheme} from 'react-native';
import {
  Box,
  Button,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Pressable,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
  VStack,
  useToken,
} from '@gluestack-ui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import Styles from 'src/styles';
import AppBar from 'src/components/AppBar';
import {GET_COVER_API} from 'src/constants/api';
import {SafeAreaView} from 'src/core/components/native';
import {RootStackParamList} from 'src/routers/routerType';
import ScreenSpinner from 'src/components/Spinner/ScreenSpinner';
import Library, {
  IGetAuthorResponse,
  IGetBookResponse,
} from 'src/service/Library';
import {ModalContent} from '@gluestack-ui/themed';
import {SelectIcon} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import dayjs from 'dayjs';

type Props = NativeStackScreenProps<RootStackParamList, 'book-details'>;

const BookDetailScreen = ({route, navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const gray = useToken('colors', 'blueGray600');

  const [dpOpen, setDpOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const [pickupDate, setPickupDate] = React.useState<Date | undefined>(
    undefined,
  );
  const [pickupTime, setPickupTime] = React.useState('');

  const [bookDetail, setBookDetail] = React.useState<
    IGetBookResponse | undefined
  >();
  const [authorDetail, setAuthorDeatil] = React.useState<
    IGetAuthorResponse | undefined
  >();
  const {key} = route?.params;
  const bookOLID = key.replace('/books/', '');

  const fetchBookDetail = async () => {
    const response = await Library.getBook(bookOLID);

    if (response?.status === 200) {
      setBookDetail(response?.data);

      const authorOLID = response?.data?.authors[0]?.key.replace(
        '/authors/',
        '',
      );
      fetchAuthorDetail(authorOLID);
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

  React.useEffect(() => {
    fetchBookDetail();
  }, []);

  const pickupTimes = () => {
    const times = [
      {label: '09:00', value: '09:00', h: 9},
      {label: '10:00', value: '10:00', h: 10},
      {label: '11:00', value: '11:00', h: 11},
      {label: '12:00', value: '12:00', h: 12},
      {label: '13:00', value: '13:00', h: 13},
      {label: '14:00', value: '14:00', h: 14},
      {label: '15:00', value: '15:00', h: 15},
      {label: '16:00', value: '16:00', h: 16},
      {label: '17:00', value: '17:00', h: 17},
    ];

    if (
      dayjs(pickupDate).format('DDMM').toString() ===
      dayjs().format('DDMM').toString()
    ) {
      return times.filter(time => time.h > new Date().getHours());
    }

    return times;
  };

  const bookData = [
    {
      key: 'Series',
      value: bookDetail?.series || '-',
    },
    {
      key: 'Dewey Decimal Class',
      value: bookDetail?.dewey_decimal_class || '-',
    },
    {
      key: 'Languages',
      value: Array.isArray(bookDetail?.languages)
        ? bookDetail?.languages
            ?.map(item => item?.key?.replace('/languages/', ''))
            .join()
        : '-',
    },
    {
      key: 'Number of Pages',
      value: bookDetail?.number_of_pages || '-',
    },
    {
      key: 'Publish Date',
      value: bookDetail?.publish_date || '-',
    },
    {
      key: 'Revision Number',
      value: bookDetail?.revision || '-',
    },
    {
      key: 'Open Library',
      value: bookOLID || '-',
    },
    {
      key: 'OCLC/WorldCat',
      value: bookDetail?.oclc_numbers?.[0] || '-',
    },
    {
      key: 'ISBN 10',
      value: bookDetail?.isbn_10?.[0] || '-',
    },
    {
      key: 'ISBN 13',
      value: bookDetail?.isbn_13?.[0] || '-',
    },
    {
      key: 'Internet Archive',
      value: bookDetail?.ocaid || '-',
    },
  ];

  return !bookDetail ? (
    <ScreenSpinner />
  ) : (
    <SafeAreaView>
      <AppBar start="back" />
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
        <Box alignItems="center">
          {bookDetail?.covers?.[0] ? (
            <Image
              alt={bookDetail?.title}
              source={{
                uri: `${GET_COVER_API}/id/${bookDetail?.covers?.[0]}-M.jpg`,
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
          <Heading>{bookDetail?.title}</Heading>

          {authorDetail ? (
            <Text fontWeight="$medium">{authorDetail?.name}</Text>
          ) : undefined}

          <Text mt={20} textAlign="justify">
            {typeof bookDetail?.description === 'string'
              ? bookDetail?.description
              : bookDetail?.description?.value || 'No book description'}
          </Text>

          <Box mt={10}>
            <HStack gap={10}>
              <VStack>
                {bookData.map(({key: keyName}, id) => (
                  <Text key={id} fontSize={12}>
                    {keyName}
                  </Text>
                ))}
              </VStack>
              <VStack>
                {bookData.map((_, id) => (
                  <Text key={id} fontSize={12}>
                    :
                  </Text>
                ))}
              </VStack>
              <VStack>
                {bookData.map(({value}, id) => (
                  <Text key={id} fontSize={12}>
                    {value}
                  </Text>
                ))}
              </VStack>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
      <HStack py={10} px={20} justifyContent="space-around" alignItems="center">
        <Box
          w={40}
          h={40}
          borderRadius={8}
          borderWidth={1}
          borderColor="$blueGray300"
          justifyContent="center"
          alignItems="center"
          sx={{_android: {mb: 10}}}>
          <Ionicons
            name="bookmark-outline"
            size={30}
            color={isDarkMode ? '#FFF' : gray}
          />
        </Box>
        <Button
          w="80%"
          borderRadius={8}
          sx={{_android: {mb: 10}}}
          onPress={() => setModalOpen(true)}>
          <ButtonText>Borrow This Book</ButtonText>
        </Button>
      </HStack>

      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        size="lg"
        closeOnOverlayClick={false}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Set Pick-Up Details</Heading>
          </ModalHeader>
          <ModalBody>
            <HStack
              p={10}
              gap={5}
              borderWidth={1}
              borderColor={isDarkMode ? '$blueGray500' : '$blueGray300'}
              borderRadius={8}
              alignItems="center">
              <Ionicons
                name="location-sharp"
                size={20}
                color={isDarkMode ? '#FFF' : gray}
              />
              <Text>GoodWill Book Store</Text>
            </HStack>
            <Pressable
              p={10}
              mt={10}
              gap={5}
              flexDirection="row"
              borderWidth={1}
              borderColor={isDarkMode ? '$blueGray300' : '$blueGray500'}
              borderRadius={8}
              alignItems="center"
              onPress={() => setDpOpen(true)}>
              <Ionicons
                name="calendar"
                size={20}
                color={isDarkMode ? '#FFF' : gray}
              />
              <Text>
                {pickupDate
                  ? dayjs(pickupDate).format('DD MMM YYYY')
                  : 'Select date'}
              </Text>
            </Pressable>

            <Select
              mt={10}
              onValueChange={setPickupTime}
              isDisabled={!pickupDate}>
              <SelectTrigger
                px={10}
                h={42}
                borderWidth={1}
                borderColor={isDarkMode ? '$blueGray300' : '$blueGray500'}
                borderRadius={8}
                justifyContent="space-between"
                alignItems="center">
                <HStack gap={5} alignItems="center">
                  <Ionicons
                    name="time"
                    size={20}
                    color={isDarkMode ? '#FFF' : gray}
                  />
                  <Text>{pickupTime ? pickupTime : 'Select time'}</Text>
                </HStack>
                <SelectIcon>
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {pickupTimes().map(item => (
                    <SelectItem
                      key={item.label}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setModalOpen(false);
              }}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              borderWidth="$0"
              onPress={() => {
                setModalOpen(false);
              }}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <DateTimePickerModal
        isVisible={dpOpen}
        mode="date"
        date={pickupDate}
        minimumDate={new Date()}
        onConfirm={date => {
          setDpOpen(false);
          setPickupDate(date);
          setPickupTime('');
        }}
        onCancel={() => setDpOpen(false)}
      />
    </SafeAreaView>
  );
};

export default BookDetailScreen;
