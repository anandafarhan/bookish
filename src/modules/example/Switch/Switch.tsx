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
  Switch,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, XStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const SwitchExampleScreen = () => {
  const [switchValue, setSwitchValue] = React.useState(false);
  return (
    <SafeAreaView>
      <AppBar start="back" title="Switch Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Switch Sizes">
          <XStack gap={10} alignItems="center">
            <Switch size="sm" />
            <Text size="sm">Small Switch</Text>
          </XStack>
          <XStack gap={10} alignItems="center">
            <Switch size="md" defaultValue={true} />
            <Text size="md">Medium Switch</Text>
          </XStack>
          <XStack gap={10} alignItems="center">
            <Switch size="lg" />
            <Text size="lg">Large Switch</Text>
          </XStack>
        </Frame>

        <Frame title="Switch Customization">
          <XStack gap={10} alignItems="center">
            <Switch
              size="md"
              trackColor={{false: '#FFF5E0', true: '#C70039'}}
            />
            <Text>Off Track Color (android only)</Text>
          </XStack>
          <XStack gap={10} alignItems="center">
            <Switch
              size="md"
              defaultValue={true}
              trackColor={{false: '#FFF5E0', true: '#C70039'}}
            />
            <Text>On Track Color</Text>
          </XStack>
          <XStack gap={10} alignItems="center">
            <Switch
              size="md"
              defaultValue={true}
              thumbColor="#12486B"
              trackColor={{false: '#FFF5E0', true: '#C70039'}}
            />
            <Text>Thumb Color</Text>
          </XStack>
        </Frame>

        <Frame title="Switch with Form Control">
          <FormControl isRequired isInvalid={!switchValue}>
            <FormControlLabel mb="$1">
              <FormControlLabelText>Camera Access</FormControlLabelText>
            </FormControlLabel>
            <XStack gap={10} alignItems="center">
              <Switch
                size="md"
                trackColor={{true: '#7DCE13'}}
                value={switchValue}
                onToggle={setSwitchValue}
              />
              <Text>Camera Access {switchValue ? 'Granted' : 'Denied'}</Text>
            </XStack>
            <FormControlHelper>
              <FormControlHelperText>
                Switch camera access on or off
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                Please turn on camera access
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SwitchExampleScreen;
