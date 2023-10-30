import {
  AlertCircleIcon,
  ChevronDownIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Icon,
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
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView} from 'src/core/components/native';
import Frame from '../components/Frame';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CircleDownIcon = () => <AntDesign name="circledowno" size={16} />;
const TagsIcon = () => <AntDesign name="tags" size={16} />;

const SelectExampleScreen = () => {
  const [value, setValue] = React.useState('');
  const variants = ['rounded', 'outline', 'underlined'];
  const sizes = ['sm', 'md', 'lg', 'xl'];
  return (
    <SafeAreaView>
      <AppBar start="back" title="Select Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Select Variants">
          {variants.map(variant => (
            <Select key={variant}>
              {/* @ts-ignore */}
              <SelectTrigger variant={variant}>
                <SelectInput placeholder={`Select ${variant}`} />
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          ))}
        </Frame>

        <Frame title="Select Sizes">
          {sizes.map(size => (
            <Select key={size}>
              {/* @ts-ignore */}
              <SelectTrigger size={size}>
                <SelectInput placeholder={`Select ${size}`} />
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          ))}
        </Frame>

        <Frame title="Select States">
          <FormControl>
            <Select isFocused>
              <SelectTrigger>
                <SelectInput placeholder="Select focused" />
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
          <FormControl isInvalid>
            <Select>
              <SelectTrigger>
                <SelectInput placeholder="Select invalid" />
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
          <FormControl isReadOnly>
            <Select>
              <SelectTrigger>
                <SelectInput placeholder="Select readonly" />
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
          <FormControl isDisabled>
            <Select>
              <SelectTrigger>
                <SelectInput placeholder="Select disabled" />
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
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>
        </Frame>

        <Frame title="Select with Icon">
          <Select>
            <SelectTrigger>
              <SelectIcon ml="$3">
                <Icon as={TagsIcon} />
              </SelectIcon>
              <SelectInput placeholder="Select icon" />
              <SelectIcon mr="$3">
                <Icon as={CircleDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent paddingBottom={30}>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="UX Research" value="ux" />
                <SelectItem label="Web Development" value="web" />
                <SelectItem
                  label="Cross Platform Development Process"
                  value="Cross Platform Development Process"
                />
                <SelectItem label="UI Designing" value="ui" isDisabled={true} />
                <SelectItem label="Backend Development" value="backend" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </Frame>

        <Frame title="Select with Form Control">
          <FormControl isRequired isInvalid={!value}>
            <FormControlLabel>
              <FormControlLabelText>
                Choose your favorite color
              </FormControlLabelText>
            </FormControlLabel>
            <Select selectedValue={value} onValueChange={setValue}>
              <SelectTrigger>
                <SelectInput placeholder="Select option" />
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
                  <SelectItem label="Red" value="red" />
                  <SelectItem label="Blue" value="blue" />
                  <SelectItem label="Black" value="black" />
                  <SelectItem label="Pink" value="pink" isDisabled />
                  <SelectItem label="Green" value="green" />
                </SelectContent>
              </SelectPortal>
            </Select>
            <FormControlHelper>
              <FormControlHelperText>
                You can only select one option
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>Mandatory field</FormControlErrorText>
            </FormControlError>
          </FormControl>

          <Text>
            Your selected color is:{' '}
            {value && (
              <Text fontWeight="600" color={value}>
                {value}
              </Text>
            )}
          </Text>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectExampleScreen;
