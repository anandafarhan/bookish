import {
  Button,
  ButtonText,
  ChevronDownIcon,
  CircleIcon,
  CloseIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Icon,
  Input,
  InputField,
  Pressable,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Textarea,
  TextareaInput,
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, XStack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const ToastExampleScreen = () => {
  const toast = useToast();
  const [variant, setVariant] = React.useState('solid');
  const [action, setAction] = React.useState('attention');
  const [placement, setPlacement] = React.useState('top');
  const [duration, setDuration] = React.useState('2000');
  const [avoidKeyboard, setAvoidKeyboard] = React.useState('n');
  const [dismissable, setDismissable] = React.useState('n');
  const [preserve, setPreserve] = React.useState('n');
  const [title, setTitle] = React.useState('New Message!');
  const [desc, setDesc] = React.useState(
    "Hey, just wanted to touch base and see how you're doing. Let's catch up soon!",
  );

  const showToast = () =>
    toast.show({
      // @ts-ignore
      placement,
      duration: preserve === 'y' ? null : +duration,
      avoidKeyboard: avoidKeyboard === 'y' ? true : false,
      render: ({id}) => {
        return (
          // @ts-ignore
          <Toast nativeID={String(id)} action={action} variant={variant}>
            <YStack space="xs">
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>{desc}</ToastDescription>
            </YStack>
            {(dismissable === 'y' || preserve === 'y') && (
              <Pressable mt="$1" onPress={() => toast.close(id)}>
                <Icon as={CloseIcon} />
              </Pressable>
            )}
          </Toast>
        );
      },
    });

  return (
    <SafeAreaView>
      <AppBar start="back" title="Toast Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Toast Demo">
          <Button onPress={showToast}>
            <ButtonText>Toast Me!</ButtonText>
          </Button>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Toast title</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                placeholder="Toast title"
                value={title}
                onChangeText={setTitle}
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Toast description</FormControlLabelText>
            </FormControlLabel>
            <Textarea size="md" w="$full">
              <TextareaInput
                placeholder="Toast description"
                value={desc}
                onChangeText={setDesc}
              />
            </Textarea>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Toast duration (ms)</FormControlLabelText>
            </FormControlLabel>
            <Input isDisabled={preserve === 'y'}>
              <InputField
                type="text"
                placeholder="Toast duration"
                value={duration}
                onChangeText={setDuration}
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Toast variant</FormControlLabelText>
            </FormControlLabel>
            <Select selectedValue={variant} onValueChange={setVariant}>
              <SelectTrigger>
                <SelectInput placeholder="Toast variants & position" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent paddingBottom={30}>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Solid" value="solid" />
                  <SelectItem label="Accent" value="accent" />
                  <SelectItem label="Outline" value="outline" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Toast action</FormControlLabelText>
            </FormControlLabel>
            <Select selectedValue={action} onValueChange={setAction}>
              <SelectTrigger>
                <SelectInput placeholder="Toast action" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent paddingBottom={30}>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Attention" value="attention" />
                  <SelectItem label="Info" value="info" />
                  <SelectItem label="Warning" value="warning" />
                  <SelectItem label="Success" value="success" />
                  <SelectItem label="Error" value="error" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Toast placement</FormControlLabelText>
            </FormControlLabel>
            <Select selectedValue={placement} onValueChange={setPlacement}>
              <SelectTrigger>
                <SelectInput placeholder="Toast action" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent paddingBottom={30}>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Top" value="top" />
                  <SelectItem label="Top Right" value="top right" />
                  <SelectItem label="Top Left" value="top left" />
                  <SelectItem label="Bottom" value="bottom" />
                  <SelectItem label="Bottom Right" value="bottom right" />
                  <SelectItem label="Bottom Left" value="bottom left" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl>
            <YStack>
              <FormControlLabel>
                <FormControlLabelText>
                  Preserve toast (no duration)
                </FormControlLabelText>
              </FormControlLabel>
              <RadioGroup value={preserve} onChange={setPreserve}>
                <XStack space="sm">
                  <Radio value="y" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>True</RadioLabel>
                  </Radio>
                  <Radio value="n" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>False</RadioLabel>
                  </Radio>
                </XStack>
              </RadioGroup>
            </YStack>
          </FormControl>

          <FormControl>
            <YStack>
              <FormControlLabel>
                <FormControlLabelText>
                  Toast avoid keyboard
                </FormControlLabelText>
              </FormControlLabel>
              <RadioGroup value={avoidKeyboard} onChange={setAvoidKeyboard}>
                <XStack space="sm">
                  <Radio value="y" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>True</RadioLabel>
                  </Radio>
                  <Radio value="n" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>False</RadioLabel>
                  </Radio>
                </XStack>
              </RadioGroup>
            </YStack>
          </FormControl>

          <FormControl>
            <YStack>
              <FormControlLabel>
                <FormControlLabelText>Dismissable toast</FormControlLabelText>
              </FormControlLabel>
              <RadioGroup
                value={dismissable}
                onChange={setDismissable}
                isDisabled={preserve === 'y'}
                opacity={preserve === 'y' ? 0.5 : 1}>
                <XStack space="sm">
                  <Radio value="y" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>True</RadioLabel>
                  </Radio>
                  <Radio value="n" size="md">
                    <RadioIndicator mr="$2">
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>False</RadioLabel>
                  </Radio>
                </XStack>
              </RadioGroup>
            </YStack>
          </FormControl>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ToastExampleScreen;
