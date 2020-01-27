class basicAuth {
  constructor(username, password) {
    this.username = username;
    this.password = password;

    this.protect = (req, res, next) => {
      // check for basic auth header
      if (
        !req.headers.authorization ||
        req.headers.authorization.indexOf("Basic ") === -1
      ) {
        return res
          .status(401)
          .json({ message: "Missing Authorization Header" });
      }

      // verify auth credentials
      const base64Credentials = req.headers.authorization.split(" ")[1];
      const credentials = Buffer.from(base64Credentials, "base64").toString(
        "ascii"
      );
      const [username, password] = credentials.split(":");
      const user =
        username == this.username &&
        password == this.password;
      if (!user)
        return res
          .status(401)
          .json({ message: "Invalid Authentication Credentials" });
      next();
    };
  }
}

module.exports = basicAuth;
