import mongoose, { Schema, model } from 'mongoose';

interface IModel {
  makeId: mongoose.Types.ObjectId,
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const makeSchema = new Schema<IModel>({
  makeId: { type: Schema.Types.ObjectId, ref: 'Make', required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

export const Make = model<IModel>('Make', makeSchema);
