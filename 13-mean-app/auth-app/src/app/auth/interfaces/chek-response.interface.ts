import { User } from "./user.interface";

export interface CheckResponseToken {
  user: User;
  token: string;
}