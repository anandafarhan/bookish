import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {createStorage} from 'src/utils/createStorage';

interface ILibraryState {
  bookings: any[];
  savedBooks: any[];
}

const {storage, storageName} = createStorage('app_lib_storage');

const useLibrary = create<ILibraryState>()(
  persist(
    _set => ({
      bookings: [],
      savedBooks: [],
    }),
    {
      name: storageName,
      storage: createJSONStorage(() => storage),
      partialize: ({bookings, savedBooks}) => ({
        bookings,
        savedBooks,
      }),
    },
  ),
);

export default useLibrary;
