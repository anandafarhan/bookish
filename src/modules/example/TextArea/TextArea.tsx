import {
  AlertCircleIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  ScrollView,
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const TextAreaExampleScreen = () => {
  const [textValue, setTextValue] = useState('');

  return (
    <SafeAreaView>
      <AppBar start="back" title="Text Area Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Text Area Sizes">
          <YStack gap={10}>
            <Textarea size="sm" w="$full">
              <TextareaInput placeholder="Your text goes small..." />
            </Textarea>
            <Textarea size="md" w="$full">
              <TextareaInput placeholder="Your text goes medium..." />
            </Textarea>
            <Textarea size="lg" w="$full">
              <TextareaInput placeholder="Your text goes large..." />
            </Textarea>
          </YStack>
        </Frame>

        <Frame title="Text Area States">
          <YStack gap={10}>
            <Textarea size="md" w="$full" isFocused>
              <TextareaInput placeholder="focused..." />
            </Textarea>
            <Textarea size="md" w="$full" isReadOnly>
              <TextareaInput placeholder="readonly..." value="readonly..." />
            </Textarea>
            <Textarea size="md" w="$full" isDisabled>
              <TextareaInput placeholder="disabled..." />
            </Textarea>
            <Textarea size="md" w="$full" isInvalid>
              <TextareaInput placeholder="invalid..." />
            </Textarea>
          </YStack>
        </Frame>

        <Frame title="Text Area with Form Control">
          <YStack gap={10}>
            <FormControl isRequired isInvalid={textValue.length < 12}>
              <FormControlLabel mb="$1">
                <FormControlLabelText>Feedback</FormControlLabelText>
              </FormControlLabel>
              <Textarea size="md" w="$full" isInvalid={textValue.length < 12}>
                <TextareaInput
                  placeholder="form controlled..."
                  value={textValue}
                  onChangeText={setTextValue}
                />
              </Textarea>
              <FormControlHelper>
                <FormControlHelperText>
                  Please enter your feedback
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  Atleast 12 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </YStack>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextAreaExampleScreen;
