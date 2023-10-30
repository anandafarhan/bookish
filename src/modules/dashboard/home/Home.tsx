import React from 'react';
import {SafeAreaView} from '@core/components/native';
import {ScrollView} from '@gluestack-ui/themed';
import useAppNavigation from 'src/hooks/useAppNavigation';

import UserHeader from 'src/components/UserHeader';
import SearchBar from './components/SearchBar';

const Home = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView flex={1}>
      <UserHeader />
      <SearchBar />
      <ScrollView />
    </SafeAreaView>
  );
};

export default Home;
