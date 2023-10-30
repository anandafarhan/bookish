import {
  Alert,
  AlertIcon,
  AlertText,
  CheckCircleIcon,
  InfoIcon,
  ScrollView,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';
import Ionicons from 'react-native-vector-icons/Ionicons';

const xboxIcon = (props: any) => <Ionicons name="logo-xbox" {...props} />;

const AlertExampleScreen = () => {
  return (
    <SafeAreaView>
      <AppBar start="back" title="Alert Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Alert Variants">
          <Alert variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is solid alert</AlertText>
          </Alert>
          <Alert variant="accent">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is accent alert</AlertText>
          </Alert>
          <Alert variant="outline">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is outline alert</AlertText>
          </Alert>
        </Frame>

        <Frame title="Alert Types">
          <Alert action="info" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is info alert</AlertText>
          </Alert>
          <Alert action="warning" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is warning alert</AlertText>
          </Alert>
          <Alert action="success" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is success alert</AlertText>
          </Alert>
          <Alert action="error" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is error alert</AlertText>
          </Alert>
          <Alert action="muted" variant="solid">
            <AlertIcon as={InfoIcon} mr="$3" />
            <AlertText>This is muted alert</AlertText>
          </Alert>
        </Frame>

        <Frame title="Alert Customization">
          <Alert action="success" variant="solid">
            <AlertIcon as={xboxIcon} mr="$3" />
            <YStack>
              <AlertText fontWeight="$bold">Success!</AlertText>
              <AlertText w={210}>Account linked successfully</AlertText>
            </YStack>
          </Alert>
          <Alert action="info" variant="solid">
            <YStack>
              <AlertText fontWeight="$bold">Success!</AlertText>
              <AlertText w={210}>Account changes saved</AlertText>
            </YStack>
            <AlertIcon as={CheckCircleIcon} ml="$3" size="xl" />
          </Alert>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AlertExampleScreen;
