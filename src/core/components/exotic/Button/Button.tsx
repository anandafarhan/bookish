import React, {RefAttributes} from 'react';
import {styled} from '@gluestack-style/react';
import {PressableProps, View, Pressable, Text, ViewStyle} from 'react-native';

interface ButtonProps extends PressableProps, Partial<ViewStyle> {
  variant?: string;
  leftComponent?: Element;
  rightComponent?: Element;
}

const StyledButton = styled(
  Pressable,
  {
    flexDirection: 'row',
    defaultProps: {
      variant: 'solid',
      size: 'md',
    },
    variants: {
      variant: {
        solid: {
          bg: '$primary600',
          _text: {color: '$primary0'},
        },
        subtle: {
          bg: '$primary400',
          _text: {color: '$primary0'},
        },
        outline: {
          bg: '#FFF',
          borderWidth: 2,
          borderColor: '$primary600',
          _text: {color: '$primary600'},
        },
      },
      size: {
        md: {
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 8,
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  },
);
const StyledButtonText = styled(
  Text,
  {
    fontWeight: '600',
  },
  {ancestorStyle: ['_text']},
);

const Button = React.forwardRef<
  PressableProps & RefAttributes<View>,
  ButtonProps
>((props, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      <StyledButtonText>Hello world</StyledButtonText>
    </StyledButton>
  );
});

export default styled(Button, {});
