# Basic-Auth to be used with Express.js

[![Build Status](https://travis-ci.org/GabrielCastello/basic-auth.svg?branch=master)](https://travis-ci.org/GabrielCastello/basic-auth) [![Coverage Status](https://coveralls.io/repos/github/GabrielCastello/basic-auth/badge.svg?branch=master)](https://coveralls.io/github/GabrielCastello/basic-auth?branch=master) [![Dependencies](https://david-dm.org/g4br13l/basic-auth.svg)](https://david-dm.org/g4br13l/basic-auth.svg)

[![https://nodei.co/npm/@g4br13l/basic-auth.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@g4br13l/basic-auth.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@g4br13l/basic-auth)

## How to install

```sh
  npm i @g4br13l/basic-auth
```

## How to use

```js
const router = express.Router();

const BasicAuth = require("@g4br13l/basic-auth");
const newBasicAuth = new BasicAuth("testUser", "testPassword");

router.get("/test", newBasicAuth.protect, (req, res, next) => res.status(200).send());

module.exports = router;
```

## Responses 

### Matching Credentials
StatusCode: `200`
```js
Sends next() to express
```
### Invalid credentials
StatusCode: `401`
```json
{
  "message": "Invalid Authentication Credentials"
}
```

### No authentication provided
StatusCode: `401`
```json
{
  "message": "Missing Authorization Header"
}
```
