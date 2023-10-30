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
  'dashboard/my-store': undefined;
  'dashboard/transactions': undefined;
  'dashboard/account': undefined;

  'demo-home': undefined;
  example: undefined;
};

export type ExampleStackParamList = {
  exampleList: undefined;
  'example/button': undefined;
  'example/text': undefined;
  'example/text-input': undefined;
  'example/text-area': undefined;
  'example/checkbox': undefined;
  'example/radio': undefined;
  'example/select': undefined;
  'example/slider': undefined;
  'example/switch': undefined;
  'example/alert': undefined;
  'example/progress': undefined;
  'example/spinner': undefined;
  'example/toast': undefined;
  'example/badge': undefined;
  'example/alert-dialog': undefined;
};
