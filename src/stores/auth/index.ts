import {create} from 'zustand';
import {MMKV} from 'react-native-mmkv';
import {createJSONStorage, StateStorage, persist} from 'zustand/middleware';

import {
  doCompleteRegister,
  doLoginRegister,
  doVerifyOTP,
  getProfile,
} from './action';

interface IAuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  authToken?: string;
  profile?: any;

  loginRegister: (phoneNumber: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  completeRegister: (props: IRegister) => Promise<void>;
  getProfile: () => Promise<void>;
  logout: () => void;
}

//change 'app' to your appname or appslug
const storageName = 'app_auth_storage';
//change / generate new storage key for each new projects
const storageKey = '3jjrc6&x-)lm%i651g7x4a%y8a=cgge5-obmp%z(&=tu+mulcn';

const storage = new MMKV({
  id: storageName,
  encryptionKey: storageKey,
});

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

const useAuth = create<IAuthState>()(
  persist(
    set => ({
      isLoading: false,
      isLoggedIn: false,
      authToken: undefined,
      profile: undefined,

      loginRegister: async phoneNumber => {
        set(() => ({isLoading: true}));
        const res = await doLoginRegister(phoneNumber);

        set(() => ({isLoading: false, authToken: res?.authToken}));
      },
      verifyOTP: async otp => {
        set(() => ({isLoading: true}));
        const res = await doVerifyOTP(otp);

        set(() => ({isLoading: false, authToken: res?.authToken}));
      },
      completeRegister: async data => {
        set(() => ({isLoading: true}));
        const res = await doCompleteRegister(data);

        set(() => ({isLoading: false, authToken: res?.authToken}));
      },
      getProfile: async () => {
        const res = await getProfile();

        set(() => ({isLoading: false, profile: res}));
      },
      logout: () => {
        set(() => ({isLoggedIn: false, authToken: undefined}));

        storage.clearAll();
      },
    }),
    {
      name: storageName,
      storage: createJSONStorage(() => zustandStorage),
      partialize: ({authToken, isLoggedIn}) => ({
        authToken,
        isLoggedIn,
      }),
    },
  ),
);

export default useAuth;
