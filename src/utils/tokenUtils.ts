// src/utils/tokenUtils.ts
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET!;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;

export const generateAccessToken = (user: { id: string; username: string }) => {
  return jwt.sign(user, accessTokenSecret, { expiresIn: '15m' });
};

export const generateRefreshToken = (user: { id: string; username: string }) => {
  return jwt.sign(user, refreshTokenSecret, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, accessTokenSecret);
  } catch (e) {
    return null;
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, refreshTokenSecret);
  } catch (e) {
    return null;
  }
};
