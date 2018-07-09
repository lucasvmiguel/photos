# Photos

[![Build Status](https://travis-ci.org/lucasvmiguel/photos.svg?branch=master)](https://travis-ci.org/lucasvmiguel/photos)

## Overview

Simple list application, I won't have time to make all the features.

## Architeture Explanation

- [Async actions](https://redux.js.org/advanced/async-actions)
- [Container components](https://redux.js.org/basics/usage-with-react)

## Installation

Make sure you have a working Node environment.

To install photos, simply run:

```bash
git clone https://github.com/lucasvmiguel/photos.git
cd photos
npm install
```

## Installation

Run project with [Expo](https://expo.io/):

```bash
npm start
```

Run project with Android:

```bash
npm start android
```

Run project with IOS:

```bash
npm start android
```

## Testing

command:

```bash
$ npm test
```

## Configuration

config.js

```js
export default {
  apis: {
    photo: "https://jsonplaceholder.typicode.com/photos"
  }
};
```
