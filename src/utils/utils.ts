import {NativeScrollEvent} from 'react-native';

export const isScrollViewCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export const formatPhoneNumber = (phone?: string): string => {
  if (typeof phone !== 'string') {
    return '';
  }
  let formattedPhone = phone;
  if (phone[0] === '0') {
    formattedPhone = phone.slice(1);
  }

  return formattedPhone.replaceAll(/(\+62)|[-()+ ]/g, '');
};
