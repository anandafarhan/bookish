import React from 'react';
import {ScrollView} from '@gluestack-ui/themed';

import {SafeAreaView} from '@core/components/native';

import SearchBar from './components/SearchBar';
import UserHeader from 'src/components/UserHeader';
import BookSection from 'src/components/BookSection';
import Styles from 'src/styles';

const Home = () => {
  return (
    <SafeAreaView flex={1}>
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
        <UserHeader />
        <SearchBar />
        <BookSection subject="Physics" />
        <BookSection subject="Programming" />
        <BookSection subject="Magic" vertical />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
