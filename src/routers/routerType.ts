export type RootStackParamList = {
  splashscreen: undefined;
  protectedstack: undefined;
  authstack: undefined;
  inappbrowser: {
    title: string;
    url?: string;
    html?: string;
    onFinish?: (e: unknown) => void;
  };

  dashboard: undefined;
  'dashboard/home': undefined;
  'dashboard/bookings': undefined;
  'dashboard/saved': undefined;
  'dashboard/account': undefined;
};
