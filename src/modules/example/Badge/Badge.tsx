import {
  Badge,
  BadgeText,
  BadgeIcon,
  CircleIcon,
  ChevronDownIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  GlobeIcon,
  Icon,
  Input,
  InputField,
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
  Center,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  CheckIcon,
  Text,
  ButtonText,
  Divider,
  Menu,
  MenuItem,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, Stack, XStack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';
import {Avatar} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';

const BadgeExampleScreen = () => {
  const [text, setText] = React.useState('NEW FEATURE');
  const [size, setSize] = React.useState('md');
  const [variant, setVariant] = React.useState('solid');
  const [action, setAction] = React.useState('info');
  const [rounded, setRounded] = React.useState('n');
  const [icon, setIcon] = React.useState('n');
  return (
    <SafeAreaView>
      <AppBar start="back" title="Badge Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Badge Demo">
          <Center>
            <Badge
              // @ts-ignore
              size={size}
              // @ts-ignore
              variant={variant}
              borderRadius={rounded === 'y' ? '$full' : '$none'}
              // @ts-ignore
              action={action}>
              <BadgeText>{text}</BadgeText>
              {icon === 'y' && <BadgeIcon as={GlobeIcon} ml="$2" />}
            </Badge>
          </Center>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Badge text</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                placeholder="Badge Text"
                value={text}
                onChangeText={setText}
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Badge size</FormControlLabelText>
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
                  <SelectItem label="Small" value="sm" />
                  <SelectItem label="Medium" value="md" />
                  <SelectItem label="Large" value="lg" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Badge variant</FormControlLabelText>
            </FormControlLabel>
            <Select selectedValue={variant} onValueChange={setVariant}>
              <SelectTrigger>
                <SelectInput placeholder="Selec badge variant" />
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
                  <SelectItem label="Outline" value="outline" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Badge action</FormControlLabelText>
            </FormControlLabel>
            <Select selectedValue={action} onValueChange={setAction}>
              <SelectTrigger>
                <SelectInput placeholder="Selec badge action" />
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
                  <SelectItem label="Info" value="info" />
                  <SelectItem label="Warning" value="warning" />
                  <SelectItem label="Success" value="success" />
                  <SelectItem label="Error" value="error" />
                  <SelectItem label="Muted" value="muted" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl>
            <YStack>
              <FormControlLabel>
                <FormControlLabelText>
                  Rounded (customizable)
                </FormControlLabelText>
              </FormControlLabel>
              <RadioGroup value={rounded} onChange={setRounded}>
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
                <FormControlLabelText>With Icon</FormControlLabelText>
              </FormControlLabel>
              <RadioGroup value={icon} onChange={setIcon}>
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

        <Frame title="Badge Usage Examples">
          <YStack space="2xl">
            <XStack space="md">
              <Avatar>
                <AvatarFallbackText>SS</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                  }}
                />
              </Avatar>
              <YStack>
                <XStack>
                  <Heading size="sm">John Doe</Heading>
                  <Badge size="sm" variant="solid" action="success" ml="$1">
                    <BadgeText>Verified</BadgeText>
                    <BadgeIcon as={CheckIcon} ml="$1" />
                  </Badge>
                </XStack>
                <Text size="sm">Project Manager</Text>
              </YStack>
            </XStack>
          </YStack>

          <Divider my={10} />

          <Stack alignItems="center">
            <YStack>
              <Badge
                h={22}
                w={22}
                bg="$red600"
                borderRadius="$full"
                mb={-14}
                mr={-14}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end">
                <BadgeText color="$white">2</BadgeText>
              </Badge>
              <Button>
                <ButtonText>Notifications</ButtonText>
              </Button>
            </YStack>
          </Stack>

          <Divider my={10} />

          <Menu
            placement="top"
            trigger={({...triggerProps}) => {
              return (
                <Button {...triggerProps}>
                  <ButtonText>Click Me</ButtonText>
                </Button>
              );
            }}>
            <MenuItem key="Community" textValue="Community">
              <XStack space="sm" alignItems="center">
                <Icon as={GlobeIcon} size="sm" />
                <Text fontSize="$sm" lineHeight="$md">
                  Community
                </Text>
              </XStack>
            </MenuItem>
            <MenuItem key="Plugins" textValue="Plugins">
              <XStack space="sm" alignItems="center">
                <Icon as={GlobeIcon} size="sm" />
                <Text fontSize="$sm" lineHeight="$md">
                  Plugins
                </Text>
              </XStack>
            </MenuItem>
            <MenuItem key="Theme" textValue="Theme">
              <XStack space="sm" alignItems="center">
                <Icon as={GlobeIcon} size="sm" />
                <Text fontSize="$sm" lineHeight="$md">
                  Theme
                </Text>
                <Badge bg="$blue300">
                  <BadgeText color="white">New</BadgeText>
                </Badge>
              </XStack>
            </MenuItem>
            <MenuItem key="Settings" textValue="Settings">
              <XStack space="sm" alignItems="center">
                <Icon as={GlobeIcon} size="sm" />
                <Text fontSize="$sm" lineHeight="$md">
                  Settings
                </Text>
              </XStack>
            </MenuItem>
            <MenuItem key="Add account" textValue="Add account">
              <XStack space="sm" alignItems="center">
                <Icon as={GlobeIcon} size="sm" />
                <Text fontSize="$sm" lineHeight="$md">
                  Add account
                </Text>
              </XStack>
            </MenuItem>
          </Menu>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BadgeExampleScreen;
