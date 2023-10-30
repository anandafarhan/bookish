import {
  AlertCircleIcon,
  Center,
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
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import AppBar from 'src/components/AppBar';
import {SafeAreaView, XStack, YStack} from 'src/core/components/native';
import Frame from '../components/Frame';
import Octicons from 'react-native-vector-icons/Octicons';

const LightbulbIcon = () => (
  <Octicons name="light-bulb" size={15} color="#FFF" />
);

const SliderExampleScreen = () => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const [onChangeEndValue, setOnChangeEndValue] = React.useState(0);

  const orientations = ['horizontal', 'vertical'];
  const sizes = ['sm', 'md', 'lg'];
  return (
    <SafeAreaView>
      <AppBar start="back" title="Slider Component" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Slider Orientation">
          {orientations.map(orientation => (
            <Center key={orientation} w="$full" h={100}>
              <Text mb={15}>{orientation}</Text>
              <Slider
                defaultValue={50}
                //@ts-ignore
                orientation={orientation}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Center>
          ))}
        </Frame>

        <Frame title="Slider Sizes">
          {sizes.map(size => (
            <Center key={size} w="$full" h={50}>
              <Text mb={15}>{size}</Text>
              <Slider
                defaultValue={50}
                //@ts-ignore
                size={size}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Center>
          ))}
        </Frame>

        <Frame title="Slider States">
          <Center w="$full" h={50}>
            <Text mb={15}>Disabled</Text>
            <FormControl w="$full" h={50} isDisabled>
              <Slider defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
          </Center>
          <Center w="$full" h={50}>
            <Text mb={15}>Readonly</Text>
            <FormControl w="$full" h={50} isReadOnly>
              <Slider defaultValue={30}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
          </Center>
          <Center w="$full" h={50}>
            <Text mb={15}>Reversed</Text>
            <FormControl w="$full" h={50}>
              <Slider defaultValue={30} isReversed>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
          </Center>
        </Frame>

        <Frame title="Slider Customization">
          <Center w="$full" h={50}>
            <Text mb={15}>Custom Color</Text>
            <Slider defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack bg="$amber600" />
              </SliderTrack>
              <SliderThumb
                p="$1"
                bg="$amber600"
                sx={{
                  ':active': {
                    borderWidth: 3,
                    borderColor: '$amber500',
                  },
                }}
              />
            </Slider>
          </Center>
          <Center w="$full" h={50}>
            <Text mb={15}>With Icon</Text>
            <Slider defaultValue={30}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb alignItems="center" justifyContent="center">
                <Icon as={LightbulbIcon} />
              </SliderThumb>
            </Slider>
          </Center>
          <Center w="$full" h={50}>
            <Text mb={15}>Custom track & thumb size</Text>
            <Slider defaultValue={30} sliderTrackHeight={10}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                alignItems="center"
                justifyContent="center"
                w={30}
                h={30}
              />
            </Slider>
          </Center>
        </Frame>

        <Frame title="Slider with Form Control">
          <YStack gap={10}>
            <FormControl isRequired isInvalid={onChangeEndValue < 1}>
              <FormControlLabel mb="$1">
                <FormControlLabelText>
                  Select donation amounts
                </FormControlLabelText>
              </FormControlLabel>
              <XStack w="$full" justifyContent="space-between">
                <Text size="md">$0</Text>
                <Center w="60%">
                  <Slider
                    size="md"
                    step={5}
                    minValue={0}
                    maxValue={60}
                    value={sliderValue}
                    onChange={v => {
                      setSliderValue(v);
                    }}
                    onChangeEnd={v => {
                      setOnChangeEndValue(v);
                    }}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Center>
                <Text size="md">$60</Text>
              </XStack>
              <FormControlHelper>
                <FormControlHelperText>
                  Slide the knob to select the donation amounts
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  Donation amount cannot be 0
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
            <YStack>
              <Text>currentsliderValue: {sliderValue}</Text>
              <Text>onChangeEndValue: {onChangeEndValue}</Text>
            </YStack>
          </YStack>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SliderExampleScreen;
