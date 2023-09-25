import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {

  _id?: string;

  @Prop({ unique: true, required: true, trim: true })
  email: string;

  @Prop({ required: true, trim: true })
  name: string;
  
  @Prop({minlength: 6, required: true, trim: true})
  password?: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: [String], default: 'USER' })
  role: string[];

}

export const userSchema = SchemaFactory.createForClass(User);
