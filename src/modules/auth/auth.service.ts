import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { Auth, IAuth } from './auth.model';
import { Token } from '../token/token.model';
import AuthDto from './auth.dto';
import { User } from '../user/user.model';
import tokenService from '../token/token.service';

class AuthService {
  async register(email: string, password: string) {
    const canditate = await Auth.findOne({ email });

    if (canditate) {
      throw new Error('User with this email already exists');
    }

    const passwordHash = bcrypt.hashSync(password, 3);
    const activationLink = uuidv4();

    const user = await Auth.create({
      email,
      password: passwordHash,
      activationLink
    });

    const authDto = new AuthDto(user);
    const tokens = tokenService.generateToken({ userId: authDto.id });
    
    await tokenService.saveToken(authDto.id, tokens.refreshToken);

    await User.create({ userId: authDto.id });

    return {
      user: {
        email: authDto.email,
        isActivated: authDto.isActivated
      },
      ...tokens,
    };
  }

  async login(email: string, password: string) {
    const user = await Auth.findOne({ email });

    if (!user) throw new Error('Invalid credentials');

    const isPassEquals = bcrypt.compareSync(password, user.password);

    if (!isPassEquals) throw new Error('Invalid credentials');

    const authDto = new AuthDto(user);
    const tokens = tokenService.generateToken({ userId: authDto.id });
    await tokenService.saveToken(authDto.id, tokens.refreshToken);

    return {
      user: {
        email: authDto.email,
      },
      ...tokens,
    };
  }

  logout(refreshToken: string) {
    return tokenService.removeToken(refreshToken);
  }

  async activate(activationLink: string) {
    const user = await Auth.findOne({ activationLink });

    if (!user) throw new Error('Invalid activation link');

    user.isActivated = true;
    await user.save();
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) throw new Error('Unauthorized');

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) throw new Error('Unauthorized');

    const user = await Auth.findOne({ _id: userData.userId });
    if (!user) throw new Error('Unauthorized');

    const authDto = new AuthDto(user);
    const tokens = tokenService.generateToken({ userId: authDto.id });
    await tokenService.saveToken(authDto.id, tokens.refreshToken);

    return {
      user: {
        email: authDto.email,
      },
      ...tokens,
    };
  }

  async deleteAccount(userId: string): Promise<IAuth | null> {
    const user = Auth.findByIdAndDelete(userId);
    await Token.deleteMany({ userId });
    return user;
  }
}

export default new AuthService();
