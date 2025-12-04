import { Auth } from '../auth/auth.model';
import { User } from './user.model';

interface UpdateProfileDto {
  username?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  company?: string;
  country?: string;
  city?: string;
  address?: string;
  postal_code?: string;
}

class UserService {
  async updateProfile(userId: string, profileData: UpdateProfileDto) {
    
    const auth = await Auth.findById(userId);
    if (!auth) throw new Error('User not found');

    const updated = await User.findOneAndUpdate(
      { userId: userId },
      { $set: profileData },
      { new: true, upsert: true }
    );

    return updated;
  }

  async getProfile(userId: string): Promise<any> {
    const profile = await User.findOne({ userId: userId });
    if (!profile) throw new Error('User not found');
    return profile;
  }

  async getAllUsers(): Promise<any[]> {
    return User.find();
  }
}

export default new UserService();