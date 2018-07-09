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

```
git clone https://github.com/lucasvmiguel/photos.git
cd photos
npm install
```

## Installation

Run project with [Expo](https://expo.io/)

```
npm start
```

Run project with Android

```
npm start android
```

Run project with IOS

```
npm start android
```

## Testing

command:

```
$ npm test
```

## Configuration

config.js

```
export default {
  apis: {
    photo: "https://jsonplaceholder.typicode.com/photos"
  }
};
```
