# Nuxt Mail

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module that makes mail easy for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `@fixers/nuxt-mail` dependency to your project

```bash
# Using pnpm
pnpm add -D @fixers/nuxt-mail

# Using yarn
yarn add --dev @fixers/nuxt-mail

# Using npm
npm install --save-dev @fixers/nuxt-mail
```

2. Add `@fixers/nuxt-mail` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@fixers/nuxt-mail'
  ]
})
```

That's it! You can now use Nuxt Mail in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@fixers/nuxt-mail/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@fixers/nuxt-mail

[npm-downloads-src]: https://img.shields.io/npm/dm/@fixers/nuxt-mail.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@fixers/nuxt-mail

[license-src]: https://img.shields.io/npm/l/@fixers/nuxt-mail.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@fixers/nuxt-mail

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
