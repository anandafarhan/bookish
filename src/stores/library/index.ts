import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {createStorage} from 'src/utils/createStorage';

export enum BookingStatus {
  Submitted = 'submitted',
  Picked = 'picked',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export interface BookingItem {
  bookOLID: string;
  title: string;
  author?: string;
  cover?: string;
  pickupLocation: string;
  pickupDate: Date;
  pickupTime: string;
  status: BookingStatus;
}

export interface SavedBookItem
  extends Pick<BookingItem, 'bookOLID' | 'title' | 'author'> {}

interface ILibraryState {
  bookings: BookingItem[];
  savedBooks: SavedBookItem[];

  addBookings: (param: BookingItem) => void;
  updateBookingStatus: (
    bookOLID: BookingItem['bookOLID'],
    status: BookingStatus,
  ) => void;
  deleteBookings: (bookOLID: BookingItem['bookOLID']) => void;

  toggleBookSave: (param: SavedBookItem) => void;
}

const {storage, storageName} = createStorage('app_lib_storage');

const useLibrary = create<ILibraryState>()(
  persist(
    set => ({
      bookings: [],
      savedBooks: [],

      addBookings(param) {
        set(state => {
          const exist = state.bookings.find(
            item => item.bookOLID === param?.bookOLID,
          );
          if (exist) {
            return {bookings: state.bookings};
          } else {
            return {bookings: [...state.bookings, param]};
          }
        });
      },

      updateBookingStatus(bookOLID, status) {
        set(state => {
          const updated = state.bookings.map(item => {
            if (item.bookOLID === bookOLID) {
              return {...item, status};
            } else {
              return item;
            }
          });

          return {bookings: updated};
        });
      },

      deleteBookings(bookOLID) {
        set(state => {
          const filtered = state.bookings.filter(
            item => item.bookOLID !== bookOLID,
          );

          return {bookings: filtered};
        });
      },

      toggleBookSave(param) {
        set(state => {
          const exist = state.savedBooks.find(
            item => item.bookOLID === param.bookOLID,
          );
          if (exist) {
            return {
              savedBooks: state.savedBooks.filter(
                item => item.bookOLID !== param.bookOLID,
              ),
            };
          } else {
            return {savedBooks: [...state.savedBooks, param]};
          }
        });
      },
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
