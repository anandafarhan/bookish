export const config = {
  screens: {
    'dashboard/products/:id': {
      path: 'products/:id',
      parse: {
        id: (id: string) => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['https://dev.meteor.app', 'meteor://'],
  config,
};

export default linking;
