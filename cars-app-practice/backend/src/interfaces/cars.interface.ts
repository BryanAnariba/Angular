import { User } from "./user.interface";

export interface Car {
  user?: string | User;
  color: string;
  gas: 'Electric' | 'Gasoline',
  year: number;
  description: string;
  price: number;
  status: boolean;
  image?: string;
  path?: string;
}