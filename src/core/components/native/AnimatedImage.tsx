import {styled} from '@gluestack-style/react';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

//@ts-ignore
const AnimatedImage = styled(Animated.createAnimatedComponent(FastImage), {});

export default AnimatedImage;
