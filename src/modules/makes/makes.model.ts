import mongoose, { Schema, model } from 'mongoose';

interface IMake {
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const makeSchema = new Schema<IMake>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

export const Make = model<IMake>('Make', makeSchema);
