const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
  let response = {};

  try {
    if (!req.headers.authorization) {
      throw new Error('Token is missing from header');
    }

    const tokenParts = req.headers.authorization.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      throw new Error('Authorization header is malformed');
    }

    const userToken = tokenParts[1];
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || 'default-secret-key'
    );

    // Optionnel : stocker le token décodé dans req.user
    req.user = decodedToken;

    return next();
  } catch (error) {
    console.error('Error in tokenValidation.js', error);
    response.status = 401;
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
