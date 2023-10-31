import React from 'react';
import {Box, Spinner} from '@gluestack-ui/themed';

const ScreenSpinner = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Spinner size="large" color="$coolGrey.700" />
    </Box>
  );
};

export default ScreenSpinner;
