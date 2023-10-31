import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

export const createStorage = (
  storageName: string,
  storageKey: string = '3jjrc6&x-)lm%i651g7x4a%y8a=cgge5-obmp%z(&=tu+mulcn',
) => {
  const storage = new MMKV({
    id: storageName,
    encryptionKey: storageKey,
  });

  const zStorage: StateStorage = {
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

  return {storage: zStorage, storageName};
};
