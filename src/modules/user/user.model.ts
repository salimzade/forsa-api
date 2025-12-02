import mongoose, { Schema, model } from 'mongoose';

export interface IUser {
  userId: mongoose.Types.ObjectId;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  company: string;
  country: string;
  city: string;
  address: string;
  postal_code: string;
}

const userSchema = new Schema<IUser>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, unique: true },
    username: { type: String, required: false, unique: true },
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    phone: { type: String, required: false },
    company: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    address: { type: String, required: false },
    postal_code: { type: String, required: false }
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
