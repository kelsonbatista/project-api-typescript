import jwt, { SignOptions } from 'jsonwebtoken';

const secret: string | undefined = 'chavesecreta';

const jwtHeadersConfig: SignOptions = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (payload: object): string => {
  const token = jwt.sign({ data: payload }, secret, jwtHeadersConfig);
  return token;
};

const getToken = (userPayload: object): object => {
  const token = generateToken(userPayload);
  return { token };
};  

export {
  generateToken,
  getToken,
};
