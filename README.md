# `use*Effect` AntiPatterns

This repo covers common anti-patterns in using React `useEffect` and related hooks.

In order to understand those anti-patterns, this code highlights the cases, and provides
a playground to explore them.

These anti-patterns are relatively straightforward to manage, and this
[PR](https://github.com/jazeee/react-hooks-dont-use-effect-101/pull/2/files)
demonstrates how to address these patterns and reduce risks related to `useEffect`

## Setup

This repo was created using Create React App.

```bash
create-react-app react-hooks-dont-use-effect-101 --template cra-template-typescript
```

Added packages:

```bash
yarn add react-query
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier prettier
```

Added `.prettierrc`, and `eslintrc.js`

## Available Scripts

* `yarn start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000)
* `yarn test` - Very minimal testing in this repo.
