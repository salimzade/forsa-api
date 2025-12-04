import mongoose, { Schema, model } from 'mongoose';

export interface IAdver {
  userId: mongoose.Types.ObjectId;
}

const AdvertSchema: Schema<IAdver> = new Schema({});

export const Advert = model<IAdver>('Advert', AdvertSchema);
