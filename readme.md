# Basic-Auth to be used with Express.js

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
