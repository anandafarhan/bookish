import appClient from 'src/clients/appClient';

export const doLoginRegister = async (phoneNumber: string): Promise<any> => {
  return appClient.post('LOGIN_API', {phoneNumber}).then(res => res.data);
};

export const doVerifyOTP = async (otp: string): Promise<any> => {
  return appClient.post('OTP_API', {otp}).then(res => res.data);
};

export const doCompleteRegister = async (data: IRegister): Promise<any> => {
  return appClient.post('REGISTER_API', data).then(res => res.data);
};

export const getProfile = async (): Promise<IProfile> => {
  return appClient.get('PROFILE_API').then(res => res.data as IProfile);
};
