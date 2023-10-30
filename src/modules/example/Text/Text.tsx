import {
  Center,
  Heading,
  Link,
  LinkText,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {SafeAreaView, XStack} from 'src/core/components/native';
import Frame from '../components/Frame';
import AppBar from 'src/components/AppBar';

function TextExampleScreen() {
  const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ];
  return (
    <SafeAreaView>
      <AppBar start="back" title="Text Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Text Sizes">
          {sizes.map(size => (
            <Center key={size}>
              {/*@ts-ignore*/}
              <Text size={size}>{size}</Text>
            </Center>
          ))}
        </Frame>

        <Frame title="Text Weight">
          <Center>
            <Text size="2xl" fontWeight="$hairline">
              Hairline
            </Text>
            <Text size="2xl" fontWeight="$thin">
              Thin
            </Text>
            <Text size="2xl" fontWeight="$light">
              Light
            </Text>
            <Text size="2xl" fontWeight="$normal">
              Normal
            </Text>
            <Text size="2xl" fontWeight="$medium">
              Medium
            </Text>
            <Text size="2xl" fontWeight="$semibold">
              Semi Bold
            </Text>
            <Text size="2xl" fontWeight="$bold">
              Bold
            </Text>
            <Text size="2xl" fontWeight="$extrabold">
              Extra Bold
            </Text>
          </Center>
        </Frame>

        <Frame title="Text Style & Decor">
          <Center>
            <Heading>I am a Heading</Heading>
            <Text size="xl" sub>
              Sub-Text
            </Text>
            <Text bg="$yellow500" size="xl">
              Highlighted
            </Text>
            <Text size="xl" bold>
              Bold
            </Text>
            <Text size="xl" italic>
              Italic
            </Text>
            <Text size="xl" underline>
              Underline
            </Text>
            <Text size="xl" strikeThrough>
              Strike Through
            </Text>
            <Text size="xl" underline strikeThrough>
              Combined
            </Text>
            <XStack>
              <Text size="xl">This is text with </Text>
              <Link href="https://meteor.id/" isExternal>
                <LinkText size="xl">Link</LinkText>
              </Link>
            </XStack>
            <Text size="xl" isTruncated>
              Truncated Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quam hic corporis id aperiam laboriosam iure eos vitae
              delectus fugiat consectetur?
            </Text>
          </Center>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TextExampleScreen;
