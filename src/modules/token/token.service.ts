import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Env } from '../../configs/env';
import { Token, type IToken } from './token.model';

type TokenPayload = {
  userId: mongoose.Types.ObjectId;
};

class TokenService {
  generateToken(payload: TokenPayload) {
    const accessToken = jwt.sign(payload, Env.JWT_ACCESS_SECRET);
    const refreshToken = jwt.sign(payload, Env.JWT_REFRESH_SECRET);

    return {
      accessToken,
      refreshToken
    };
  }

  validateAccessToken(token: string) {
    try {
      return jwt.verify(token, Env.JWT_ACCESS_SECRET);
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, Env.JWT_REFRESH_SECRET) as TokenPayload;
      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId: TokenPayload['userId'], refreshToken: string): Promise<IToken | null> {
    const tokenData = await Token.findOne({ userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    return await Token.create({ userId, refreshToken });
  }

  async removeToken(refreshToken: string): Promise<{ deletedCount?: number }> {
    return Token.deleteOne({ refreshToken });
  }

  async findToken(refreshToken: string): Promise<IToken | null> {
    return Token.findOne({ refreshToken });
  }
}

export default new TokenService();
