import {ms} from 'react-native-size-matters';
import {Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    paddingTop: Platform.select({ios: 20, android: 10}) || 0,
    paddingBottom: Platform.select({ios: 20, android: 10}) || 0,
  },

  tabBarStyle: {
    flexDirection: 'column',
    height: Platform.select({ios: ms(76), android: ms(58)}),
    backgroundColor: '#FFFFFF',
    elevation: 10,
    shadowOffset: {height: -2, width: 0},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabStyle: {
    paddingVertical: ms(10),
  },

  defaultShadow: {
    elevation: 5,
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
});

export default Styles;