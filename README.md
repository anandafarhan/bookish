<!-- prettier-ignore-start -->
# Bookish App

library booking system using [Open Library API](https://openlibrary.org/developers/api) created with :
- node v16.20.1
- yarn 3.6.1

## Stack Resources
- react-native ^0.72.0 - [React Nayive Documentation](https://reactnative.dev/docs/0.70/getting-started)
- zustand 4.4.1 - [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- @gluestack-ui/themed 1.0.8 - [Gluestack UI](https://gluestack.io/)

## Getting Started
First, install depedency:
```bash
yarn
# or
npm install
# or if having trouble using npm install
npm install --legacy-peer-deps
```

Install ios depedency:
```bash
npx pod-install
```

Run development build
```bash
# ios
yarn ios

# android
yarn android

# using npm
# ios
npm run ios

# android
npm run android
```

If you have miss align depedency version run
```bash
yarn align-deps
# or
npm run align-deps
```
<!-- prettier-ignore-end -->
