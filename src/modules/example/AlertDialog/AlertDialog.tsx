import {
  AlertCircleIcon,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  ButtonGroup,
  ButtonText,
  Center,
  ChevronDownIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Icon,
  Input,
  InputField,
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
  Switch,
  Text,
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, Stack, XStack} from 'src/core/components/native';
import Frame from '../components/Frame';

const AlertDialogExampleScreen = () => {
  const [title, setTitle] = React.useState('Quota Limit');
  const [text, setText] = React.useState(
    'You have exceeded your monthly upload limit. Please upgrade to a premium account to continue uploading.',
  );
  const [size, setSize] = React.useState('md');
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const [useRNModal, setUseRNModal] = React.useState(false);
  const [avoidKeyboard, setAvoidKeyboard] = React.useState(false);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = React.useState(false);
  const [isKeyboardDismissable, setIsKeyboardDismissable] =
    React.useState(false);
  return (
    <SafeAreaView>
      <AppBar start="back" title="Alert Dialog Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Alert Dialog Demo">
          <Center>
            <Button onPress={() => setShowAlertDialog(true)}>
              <ButtonText>Show Alert Diaolog</ButtonText>
            </Button>
          </Center>
          <Stack w="$full" mt={20} gap={10}>
            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Dialog Title</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  type="text"
                  placeholder="Alert dialog title"
                  value={title}
                  onChangeText={setTitle}
                />
              </Input>
            </FormControl>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Dialog Text</FormControlLabelText>
              </FormControlLabel>
              <Textarea size="md" w="$full">
                <TextareaInput
                  placeholder="Alert dialog text"
                  value={text}
                  onChangeText={setText}
                />
              </Textarea>
            </FormControl>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Dialog size</FormControlLabelText>
              </FormControlLabel>
              <Select selectedValue={size} onValueChange={setSize}>
                <SelectTrigger>
                  <SelectInput placeholder="Selec badge size" />
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
                    <SelectItem label="X Small" value="xs" />
                    <SelectItem label="Small" value="sm" />
                    <SelectItem label="Medium" value="md" />
                    <SelectItem label="Large" value="lg" />
                    <SelectItem label="Full" value="full" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>

            <XStack gap={10} alignItems="center" justifyContent="space-between">
              <Text fontSize={14} fontWeight="600">
                Use RN Modal
              </Text>
              <Switch
                size="md"
                trackColor={{true: '#7DCE13'}}
                value={useRNModal}
                onToggle={setUseRNModal}
              />
            </XStack>
            <XStack gap={10} alignItems="center" justifyContent="space-between">
              <Text fontSize={14} fontWeight="600">
                Avoid Keyboard
              </Text>
              <Switch
                size="md"
                trackColor={{true: '#7DCE13'}}
                value={avoidKeyboard}
                onToggle={setAvoidKeyboard}
              />
            </XStack>
            <XStack gap={10} alignItems="center" justifyContent="space-between">
              <Text fontSize={14} fontWeight="600">
                Close on Overlay Click
              </Text>
              <Switch
                size="md"
                trackColor={{true: '#7DCE13'}}
                value={closeOnOverlayClick}
                onToggle={setCloseOnOverlayClick}
              />
            </XStack>
            <XStack gap={10} alignItems="center" justifyContent="space-between">
              <Text fontSize={14} fontWeight="600">
                Dissmiss on Keyboard Esc
              </Text>
              <Switch
                size="md"
                trackColor={{true: '#7DCE13'}}
                value={isKeyboardDismissable}
                onToggle={setIsKeyboardDismissable}
              />
            </XStack>
          </Stack>
        </Frame>
      </ScrollView>

      <AlertDialog
        //@ts-ignore
        size={size}
        isOpen={showAlertDialog}
        onClose={() => {
          setShowAlertDialog(false);
        }}
        useRNModal={useRNModal}
        avoidKeyboard={avoidKeyboard}
        closeOnOverlayClick={closeOnOverlayClick}
        isKeyboardDismissable={isKeyboardDismissable}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader borderBottomWidth="$0">
            <XStack space="sm" alignItems="center">
              <Icon as={AlertCircleIcon} color="$error700" size="lg" />
              <Heading size="lg">{title}</Heading>
            </XStack>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text>{text}</Text>
          </AlertDialogBody>
          <AlertDialogFooter borderTopWidth="$0">
            <ButtonGroup space="lg">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}>
                <ButtonText fontSize="$md">Close</ButtonText>
              </Button>
              <Button
                action="primary"
                onPress={() => {
                  setShowAlertDialog(false);
                }}>
                <ButtonText>View plans</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SafeAreaView>
  );
};

export default AlertDialogExampleScreen;
