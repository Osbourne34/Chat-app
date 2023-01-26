import jsonwebtoken from 'jsonwebtoken';

export const generateToken = (payload, expiresIn) => {
  return jsonwebtoken.sign(payload, process.env.SECRET_KEY, {
    expiresIn,
  });
};
