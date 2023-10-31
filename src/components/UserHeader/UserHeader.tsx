import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Heading,
} from '@gluestack-ui/themed';

import images from 'src/assets/images';

const UserHeader = () => {
  return (
    <HStack px={20} py={20} alignItems="center" justifyContent="space-between">
      <Heading fontSize={24}>Hi, Farhan!</Heading>

      <Avatar bg="$amber400" size="md">
        <AvatarFallbackText>AF</AvatarFallbackText>
        <AvatarImage source={images.avatar} />
      </Avatar>
    </HStack>
  );
};

export default UserHeader;
