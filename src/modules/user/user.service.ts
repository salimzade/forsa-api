import { Auth } from '../auth/auth.model';
import { User } from './user.model';

class UserService {
  async updateProfile(userId: string, profileData: any): Promise<any> {
    const user = await Auth.findById(userId);
    if (!user) throw new Error('User not found');

    const updatedUser = await User.findOneAndUpdate(
      { authId: user._id },
      { $set: profileData },
      { new: true }
    );

    return updatedUser;
  }

  async getProfile(userId: string): Promise<any> {
    const profile = await User.findOne({ authId: userId });
    if (!profile) throw new Error('User not found');
    return profile;
  }

  async getAllUsers(): Promise<any[]> {
    return User.find();
  }
}

export default new UserService();