// Third party libraries
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleEnum } from './user.enum';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

// Schema configuration

@Schema({ timestamps: true })
export class User {
  _id?: any;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  phonenumber?: string;

  @Prop({ required: false })
  password?: string;

  @Prop({ required: false })
  refreshToken?: string;

  @Prop({ required: false, default: null })
  token?: string;

  @Prop({ required: false, default: false })
  isActive?: boolean;

  @Prop({
    required: false,
    enum: RoleEnum,
    default: RoleEnum.ADMIN,
  })
  role?: RoleEnum;
}

export const UserSchema = SchemaFactory.createForClass(User);
