import mongoose from 'mongoose';

interface IModel {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  isActivated: boolean;
}

class AuthDto {
  id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  isActivated: boolean;

  constructor(model: IModel) {
    this.id = model._id;
    this.email = model.email;
    this.password = model.password;
    this.isActivated = model.isActivated;
  }
}

export default AuthDto;