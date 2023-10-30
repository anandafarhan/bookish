import {
  Radio,
  CircleIcon,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  Text,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, Stack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RadioExampleScreen = () => {
  const [values, setValues] = React.useState('React');
  const [values1, setValues1] = React.useState('Read-only');
  const [values2, setValues2] = React.useState('Extended');
  return (
    <SafeAreaView>
      <AppBar start="back" title="Radio Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Radio Sizes">
          <RadioGroup gap={5}>
            <Radio value="sm" size="sm">
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Small</RadioLabel>
            </Radio>
            <Radio value="md" size="md">
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Medium</RadioLabel>
            </Radio>
            <Radio value="lg" size="lg">
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Large</RadioLabel>
            </Radio>
          </RadioGroup>
        </Frame>

        <Frame title="Radio States">
          <RadioGroup gap={5}>
            <Radio value="invalid" isInvalid>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Invalid</RadioLabel>
            </Radio>
            <Radio value="disabled" isDisabled>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Disabled</RadioLabel>
            </Radio>
          </RadioGroup>
        </Frame>

        <Frame title="Radio with Custom Icon">
          <RadioGroup gap={5} value={values} onChange={setValues}>
            <Radio value="React">
              <RadioIndicator
                mr="$2"
                sx={{':checked': {backgroundColor: '#61DBFB', borderWidth: 0}}}>
                <RadioIcon
                  as={() => (
                    <Ionicons name="logo-react" size={15} color="white" />
                  )}
                />
              </RadioIndicator>
              <RadioLabel>React</RadioLabel>
            </Radio>
            <Radio value="Vue">
              <RadioIndicator
                mr="$2"
                sx={{':checked': {backgroundColor: '#41B883', borderWidth: 0}}}>
                <RadioIcon
                  as={() => (
                    <Ionicons name="logo-vue" size={15} color="white" />
                  )}
                />
              </RadioIndicator>
              <RadioLabel>Vue</RadioLabel>
            </Radio>
            <Radio value="Angular">
              <RadioIndicator
                mr="$2"
                sx={{':checked': {backgroundColor: '#B52E31', borderWidth: 0}}}>
                <RadioIcon
                  as={() => (
                    <Ionicons name="logo-angular" size={15} color="white" />
                  )}
                />
              </RadioIndicator>
              <RadioLabel>Angular</RadioLabel>
            </Radio>
          </RadioGroup>
        </Frame>

        <Frame title="Radio with Helper Text">
          <RadioGroup value={values1} onChange={setValues1}>
            <YStack space="2xl">
              <Stack>
                <Radio value="Read-only" size="md">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Extended coverage</RadioLabel>
                </Radio>
                <Text size="sm" ml="$7" color="$textLight500">
                  Extra services included
                </Text>
              </Stack>
              <Stack>
                <Radio value="Write" size="md">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Basic coverage</RadioLabel>
                </Radio>
                <Text size="sm" ml="$7" color="$textLight500">
                  Basic service only
                </Text>
              </Stack>
            </YStack>
          </RadioGroup>
        </Frame>

        <Frame title="Contolled Radio">
          <RadioGroup value={values2} onChange={setValues2}>
            <YStack space="2xl">
              <Stack>
                <Radio value="Extended" size="md">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Extended coverage</RadioLabel>
                </Radio>
                <Text size="sm" ml="$7" color="$textLight500">
                  Extra services included
                </Text>
              </Stack>
              <Stack>
                <Radio value="Basic" size="md">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Basic coverage</RadioLabel>
                </Radio>
                <Text size="sm" ml="$7" color="$textLight500">
                  Basic service only
                </Text>
              </Stack>
              <Stack>
                <Radio value="None" size="md">
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Only Product</RadioLabel>
                </Radio>
                <Text size="sm" ml="$7" color="$textLight500">
                  Only Product
                </Text>
              </Stack>
            </YStack>
          </RadioGroup>
          <Text mt={5}>Coverage: {values2}</Text>
        </Frame>

        <Frame title="Radio with Form Control">
          <FormControl isInvalid isRequired>
            <YStack space="md">
              <FormControlLabel>
                <FormControlLabelText>
                  Which time slot works best for you?
                </FormControlLabelText>
              </FormControlLabel>
              <RadioGroup>
                <YStack space="sm">
                  <Radio value="Monday" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Monday</RadioLabel>
                  </Radio>
                  <Radio value="Tuesday" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Tuesday</RadioLabel>
                  </Radio>
                  <Radio value="Wednesday" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Wednesday</RadioLabel>
                  </Radio>
                </YStack>
              </RadioGroup>
              <Text fontSize="$sm" color="$textLight500">
                Choose a time slot for the meeting
              </Text>
            </YStack>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>Please select day</FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RadioExampleScreen;
