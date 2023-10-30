import {
  AlertCircleIcon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  ScrollView,
  SearchIcon,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const TextInputExampleScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView>
      <AppBar start="back" title="Text Input Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Text Input Variants">
          <YStack gap={10}>
            <Input borderWidth={0}>
              <InputField placeholder="Unstyled" />
            </Input>
            <Input variant="rounded">
              <InputField placeholder="Rounded" />
            </Input>
            <Input variant="outline">
              <InputField placeholder="Outline" />
            </Input>
            <Input variant="underlined">
              <InputField placeholder="Underline" />
            </Input>
          </YStack>
        </Frame>

        <Frame title="Text Input Sizes">
          <YStack gap={10}>
            <Input size="sm">
              <InputField placeholder="Small" />
            </Input>
            <Input size="md">
              <InputField placeholder="Medium" />
            </Input>
            <Input size="lg">
              <InputField placeholder="Large" />
            </Input>
            <Input size="xl">
              <InputField placeholder="X Large" />
            </Input>
          </YStack>
        </Frame>

        <Frame title="Text Input States">
          <YStack gap={10}>
            <Input isFocused>
              <InputField placeholder="Focused" />
            </Input>
            <Input isInvalid>
              <InputField placeholder="Invalid" />
            </Input>
            <Input isReadOnly>
              <InputField placeholder="Readonly" value="Readonly" />
            </Input>
            <Input isHovered>
              <InputField placeholder="Hovered" />
            </Input>
            <Input isDisabled>
              <InputField placeholder="Disabled" />
            </Input>
          </YStack>
        </Frame>

        <Frame title="Text Input with Icon">
          <YStack gap={10}>
            <Input>
              <InputSlot pl="$3">
                <InputIcon as={SearchIcon} />
              </InputSlot>
              <InputField type="text" placeholder="Search..." />
            </Input>
          </YStack>
        </Frame>

        <Frame title="Text Input with Form Control">
          <YStack gap={10}>
            <FormControl isInvalid isRequired>
              <FormControlLabel mb="$1">
                <FormControlLabelText>Form Label</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  defaultValue="12345"
                  placeholder="password"
                />
                <InputSlot
                  pr="$3"
                  onPress={() => setShowPassword(prev => !prev)}>
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
              <FormControlHelper>
                <FormControlHelperText>
                  Must be atleast 6 characters.
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  Atleast 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </YStack>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextInputExampleScreen;
