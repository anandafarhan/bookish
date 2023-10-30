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

  'auth/onboarding': undefined;
  'auth/login-register': undefined;
  'auth/login/otp': {username: string};

  'auth/register/otp': {username: string};
  'auth/register/finish': undefined;

  dashboard: undefined;
  'dashboard/home': undefined;
  'dashboard/bookings': undefined;
  'dashboard/bookmarks': undefined;
  'dashboard/account': undefined;
};
