import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localeData from 'dayjs/plugin/localeData';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// import RNLocalize from 'react-native-localize';

const initDayJs = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(localeData);
  dayjs.extend(customParseFormat);
  // dayjs.tz.setDefault(RNLocalize.getTimeZone());
};

export default initDayJs;
