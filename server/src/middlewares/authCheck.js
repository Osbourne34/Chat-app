import jsonwebtoken from 'jsonwebtoken';

export const authCheck = async (req, res, next) => {
  const token =
    req.headers.authorization &&
    req.headers.authorization.replace('Bearer ', '');

  if (!token) {
    return res.status(403).send('Not authorized, token failed');
  }

  try {
    const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);

    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(403).send('Not authorized, token failed');
  }
};
