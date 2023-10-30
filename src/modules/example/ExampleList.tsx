import React from 'react';
import {SafeAreaView, Stack} from '@core/components/native';
import {Button, ButtonText, Heading, ScrollView} from '@gluestack-ui/themed';
import useAppNavigation from 'src/hooks/useAppNavigation';
import AppBar from 'src/components/AppBar';

const ExampleScreen = () => {
  const navigation = useAppNavigation();

  const components = [
    {
      title: 'Typography',
      items: [
        {
          name: 'Text & Heading',
          action: () => navigation.navigate('example/text'),
        },
      ],
    },
    {
      title: 'Forms',
      items: [
        {name: 'Button', action: () => navigation.navigate('example/button')},
        {
          name: 'Text Input',
          action: () => navigation.navigate('example/text-input'),
        },
        {
          name: 'Text Area',
          action: () => navigation.navigate('example/text-area'),
        },
        {
          name: 'Checkbox',
          action: () => navigation.navigate('example/checkbox'),
        },
        {
          name: 'Radio',
          action: () => navigation.navigate('example/radio'),
        },
        {
          name: 'Select (alpha)',
          action: () => navigation.navigate('example/select'),
        },
        {
          name: 'Slider',
          action: () => navigation.navigate('example/slider'),
        },
        {
          name: 'Switch',
          action: () => navigation.navigate('example/switch'),
        },
      ],
    },
    {
      title: 'Feedback',
      items: [
        {
          name: 'Alert',
          action: () => navigation.navigate('example/alert'),
        },
        {
          name: 'Progress',
          action: () => navigation.navigate('example/progress'),
        },
        {
          name: 'Spinner',
          action: () => navigation.navigate('example/spinner'),
        },
        {
          name: 'Toast',
          action: () => navigation.navigate('example/toast'),
        },
      ],
    },
    {
      title: 'Data Display',
      items: [
        {
          name: 'Badge',
          action: () => navigation.navigate('example/badge'),
        },
      ],
    },
    {
      title: 'Overlay',
      items: [
        {
          name: 'Alert Dialog',
          action: () => navigation.navigate('example/alert-dialog'),
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <AppBar start="back" title="Component Examples" />
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        {components.map(component => (
          <Stack key={component.title} mt={10} px={20} gap={10}>
            <Heading>{component.title}</Heading>
            {component.items.map(item => (
              <Button key={item.name} onPress={item.action}>
                <ButtonText>{item.name}</ButtonText>
              </Button>
            ))}
          </Stack>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExampleScreen;
