import {
  CheckIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControl,
  Heading,
  ScrollView,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, Stack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckboxExampleScreen = () => {
  const [values, setValues] = React.useState(['Design']);
  return (
    <SafeAreaView>
      <AppBar start="back" title="Checkbox Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Checkbox Sizes">
          {/* //! Please provide accessibilityLabel in all your checkboxes !// */}
          <Checkbox size="sm" value="sm" accessibilityLabel="sm">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Small</CheckboxLabel>
          </Checkbox>

          <Checkbox size="md" value="md" accessibilityLabel="md">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Medium</CheckboxLabel>
          </Checkbox>

          <Checkbox size="lg" value="lg" accessibilityLabel="lg">
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Large</CheckboxLabel>
          </Checkbox>
        </Frame>

        <Frame title="Checkbox States">
          <Checkbox value="invalid" accessibilityLabel="checked" isChecked>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Checked</CheckboxLabel>
          </Checkbox>

          <Checkbox value="invalid" accessibilityLabel="invalid" isInvalid>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Invalid</CheckboxLabel>
          </Checkbox>

          <Checkbox value="disabled" accessibilityLabel="disabled" isDisabled>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Disabled</CheckboxLabel>
          </Checkbox>
        </Frame>

        <Frame title="Checkbox with Custom Icon">
          <Checkbox value="Xbox" accessibilityLabel="xbox" defaultIsChecked>
            <CheckboxIndicator
              mr="$2"
              sx={{':checked': {backgroundColor: '#0E7A0D', borderWidth: 0}}}>
              <CheckboxIcon
                as={() => <Ionicons name="logo-xbox" size={15} color="white" />}
              />
            </CheckboxIndicator>
            <CheckboxLabel>Xbox</CheckboxLabel>
          </Checkbox>
          <Checkbox
            value="Playstation"
            accessibilityLabel="playstation"
            defaultIsChecked>
            <CheckboxIndicator
              mr="$2"
              sx={{':checked': {backgroundColor: '#FFF', borderWidth: 0}}}>
              <CheckboxIcon
                as={() => (
                  <Ionicons name="logo-playstation" size={15} color="#DF0024" />
                )}
              />
            </CheckboxIndicator>
            <CheckboxLabel>Playstation</CheckboxLabel>
          </Checkbox>
          <Checkbox
            value="Windows"
            accessibilityLabel="windows"
            defaultIsChecked>
            <CheckboxIndicator
              mr="$2"
              sx={{':checked': {backgroundColor: '#00a2ed', borderWidth: 0}}}>
              <CheckboxIcon
                as={() => (
                  <Ionicons name="logo-windows" size={15} color="white" />
                )}
              />
            </CheckboxIndicator>
            <CheckboxLabel>Windows</CheckboxLabel>
          </Checkbox>
        </Frame>

        <Frame title="Checkbox with Help Text">
          <Stack>
            <Checkbox value="Design" accessibilityLabel="design">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Design</CheckboxLabel>
            </Checkbox>
            <Text size="sm" ml="$7">
              Subscribe to updates from the Design Feed
            </Text>
          </Stack>
          <Stack>
            <Checkbox
              value="Marketing"
              accessibilityLabel="marketing"
              defaultIsChecked>
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Marketing</CheckboxLabel>
            </Checkbox>
            <Text size="sm" ml="$7">
              Subscribe to updates from the Marketing Feed
            </Text>
          </Stack>
        </Frame>

        <Frame title="Controlled Checkbox">
          <CheckboxGroup
            value={values}
            onChange={keys => {
              setValues(keys);
            }}>
            <Stack>
              <Checkbox value="Design" accessibilityLabel="design">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Design</CheckboxLabel>
              </Checkbox>
              <Text size="sm" ml="$7">
                Subscribe to updates from the Design Feed
              </Text>
            </Stack>
            <Stack>
              <Checkbox value="Marketing" accessibilityLabel="marketing">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Marketing</CheckboxLabel>
              </Checkbox>
              <Text size="sm" ml="$7">
                Subscribe to updates from the Marketing Feed
              </Text>
            </Stack>
            <Stack>
              <Checkbox value="Programming" accessibilityLabel="programming">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Programming</CheckboxLabel>
              </Checkbox>
              <Text size="sm" ml="$7">
                Subscribe to updates from the Programming Feed
              </Text>
            </Stack>
          </CheckboxGroup>
          <Text mt={10}>Selected: {values.join(', ')}</Text>
        </Frame>

        <Frame title="Checkbox with Form Control">
          <FormControl>
            <YStack space="sm">
              <Heading size="sm">Sign up for newsletters</Heading>
              <Checkbox value="daily-bits" accessibilityLabel="daily-bits">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Daily Bits</CheckboxLabel>
              </Checkbox>
              <Checkbox
                value="event-updates"
                accessibilityLabel="event-updates">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Event Updates</CheckboxLabel>
              </Checkbox>
              <Checkbox value="sponsorship" accessibilityLabel="sponsorship">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Sponsorship</CheckboxLabel>
              </Checkbox>
              <Text size="sm">Subscibe to newsletters for updates</Text>
            </YStack>
          </FormControl>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckboxExampleScreen;
