import React from 'react';
import {SafeAreaView} from '@core/components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
  ScrollView,
} from '@gluestack-ui/themed';
import Frame from '../components/Frame';
import AppBar from 'src/components/AppBar';

const AlertCircleIcon = () => (
  <Ionicons name="alert-circle-outline" size={20} color="#FFF" />
);

const ArrowForwardCircleIcon = () => (
  <Ionicons name="arrow-forward-circle-outline" size={20} color="#FFF" />
);

const BagIcon = () => <Ionicons name="bag" size={18} color="#FFF" />;

const ButtonExampleScreen = () => {
  return (
    <SafeAreaView>
      <AppBar start="back" title="Button Examples" />
      <ScrollView contentContainerStyle={{padding: 30}}>
        <Frame title="Button Variants">
          <Button variant="solid">
            <ButtonText>Solid</ButtonText>
          </Button>
          <Button variant="outline" action="primary">
            <ButtonText>Outline</ButtonText>
          </Button>
          <Button variant="link" action="primary">
            <ButtonText>Link</ButtonText>
          </Button>
        </Frame>

        <Frame title="Button States">
          <Button variant="solid" action="primary" isDisabled>
            <ButtonSpinner mr="$1" />
            <ButtonText>Loading...</ButtonText>
          </Button>
          <Button variant="solid" action="primary" isDisabled>
            <ButtonText>Disabled</ButtonText>
          </Button>
        </Frame>

        <Frame title="Button Sizes">
          <Button size="xs" variant="solid" action="primary">
            <ButtonText>X Small</ButtonText>
          </Button>
          <Button size="sm" variant="solid" action="primary">
            <ButtonText>Small</ButtonText>
          </Button>
          <Button size="md" variant="solid" action="primary">
            <ButtonText>Medium</ButtonText>
          </Button>
          <Button size="lg" variant="solid" action="primary">
            <ButtonText>Large</ButtonText>
          </Button>
          <Button size="xl" variant="solid" action="primary">
            <ButtonText>X Large</ButtonText>
          </Button>
        </Frame>

        <Frame title="Button Icons">
          <Button variant="solid" action="primary">
            <ButtonIcon as={AlertCircleIcon} />
            <ButtonText ml={3}>Left Icon</ButtonText>
          </Button>
          <Button variant="solid" action="primary">
            <ButtonText mr={3}>Right Icon</ButtonText>
            <ButtonIcon as={ArrowForwardCircleIcon} />
          </Button>
          <Button variant="solid" action="primary">
            <ButtonIcon as={BagIcon} />
            <ButtonText mx={3}>Left Right</ButtonText>
            <ButtonIcon as={ArrowForwardCircleIcon} />
          </Button>
        </Frame>

        <Frame title="Button Group">
          <ButtonGroup gap={0} justifyContent="center" isAttached>
            <Button variant="solid" action="primary">
              <ButtonText>Left</ButtonText>
            </Button>
            <Button variant="solid" action="primary">
              <ButtonText>Center</ButtonText>
            </Button>
            <Button variant="solid" action="primary">
              <ButtonText>Right</ButtonText>
            </Button>
          </ButtonGroup>

          <ButtonGroup gap={0} justifyContent="center" isAttached>
            <Button variant="outline" action="primary">
              <ButtonText>Left</ButtonText>
            </Button>
            <Button variant="outline" action="primary">
              <ButtonText>Center</ButtonText>
            </Button>
            <Button variant="outline" action="primary">
              <ButtonText>Right</ButtonText>
            </Button>
          </ButtonGroup>
        </Frame>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonExampleScreen;
