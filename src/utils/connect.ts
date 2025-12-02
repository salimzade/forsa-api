import mongoose from 'mongoose';

export async function connectToDatabase(uri: string): Promise<void> {
  try {
    await mongoose.connect(uri);
    console.log('[MONGODB] Successfully connected to MongoDB');
  } catch (error) {
    console.error('[MONGODB] Error connecting to MongoDB:', error);
    throw error;
  }
}
