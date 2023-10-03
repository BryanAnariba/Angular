import { Auth } from "./auth.interface";

export interface User extends Auth {
  _id?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  status?: boolean;
}