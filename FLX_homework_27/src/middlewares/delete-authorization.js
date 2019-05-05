function authorized(req, res, next) {
    let authorization = req.header('Authorization');
    if (authorization == 'X-Password qwerty') {
      return next();
    } else {
      res.status(400).send('Please authorize to get access');
    }
  }
  module.exports = authorized;