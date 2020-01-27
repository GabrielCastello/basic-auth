# Basic-Auth to be used with Express.js

### How to use

```js
const router = express.Router();

const BasicAuth = require("@g4br13l/basic-auth");
const newBasicAuth = new BasicAuth("testUser", "testPassword");

router.get("/test", newBasicAuth.protect, (req, res, next) => res.send("authorized!"));

module.exports = router;
```
