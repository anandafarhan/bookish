import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from 'src/routers/routerType';

const useAppNavigation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigation;
};

export const useBack = (customBackAction?: () => void) => {
  const navigation = useAppNavigation();
  const handleBack = () => {
    if (customBackAction) {
      customBackAction();
    } else {
      if (navigation.canGoBack()) {
        navigation.goBack();
      } else {
        backToHome();
      }
    }
  };

  const backToHome = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'dashboard'}],
    });
  };

  return {handleBack, backToHome};
};

export default useAppNavigation;
