import { User } from "../interfaces";
import { userModel } from "../models";

export class UserService {

  public async findUser (email: string): Promise<User | null> {
    return await userModel.findOne({ email: email, status: true });
  }

}