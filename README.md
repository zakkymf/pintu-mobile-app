# Pintu-Mobile

pintu-mobile-app is repository for the solutions of assignment to PINTU hiring process.

## Getting Started

To get start this repo, just following these instructions below.

```
git clone https://github.com/zakkymf/pintu-mobile-app
cd pintu-mobile-app
yarn install / npm install
cd ios && pod install
yarn android
yarn ios
```

## Structure

```
src
├── feature
│   ├── Account
│   │   └── presentatation
│   │       ├── components
│   │       └── screens
│   │           └── index.tsx
│   ├── Discover
│   │   └── presentatation
│   │       ├── components
│   │       └── screens
│   │           └── index.tsx
│   ├── Home
│   │   └── presentatation
│   │       ├── components
│   │       └── screens
│   │           └── index.tsx
│   ├── Market
│   │   ├── domain
│   │   │   └── Market.entities.ts
│   │   ├── hooks
│   │   │   └── useMarket.ts
│   │   └── presentatation
│   │       ├── components
│   │       │   ├── Filter.tsx
│   │       │   ├── Header.tsx
│   │       │   ├── List.tsx
│   │       │   ├── Pill.tsx
│   │       │   ├── Sort.tsx
│   │       │   ├── filter.style.ts
│   │       │   ├── header.style.ts
│   │       │   ├── list.style.ts
│   │       │   └── pill.style.ts
│   │       └── screens
│   │           ├── StockList.tsx
│   │           ├── index.tsx
│   │           └── market.styles.ts
│   └── Wallet
│       └── presentatation
│           ├── components
│           └── screens
│               └── index.tsx
├── navigation
│   ├── Navigation.tsx
│   └── Tab.tsx
└── shared
    ├── constant
    │   └── filter.constant.ts
    ├── hooks
    │   └── useInterval.ts
    ├── libraries
    │   └── httpClient.ts
    └── utility
        └── utils.ts
```

## Build With
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/) for Navigation

## What's Next

- Refactor for better code
- Add some test for component or screen
- Improve UI Design
