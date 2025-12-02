import mongoose, { Schema, model } from 'mongoose';

export interface IAuth {
  email: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
  createdAt: Date;
  updatedAt: Date;
}

const authSchema = new Schema<IAuth>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export const Auth = model<IAuth>('Auth', authSchema);
