import mongoose, { Schema, model } from 'mongoose';

export interface IToken extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

const tokenSchema = new Schema<IToken>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    refreshToken: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export const Token = model<IToken>('Token', tokenSchema);
