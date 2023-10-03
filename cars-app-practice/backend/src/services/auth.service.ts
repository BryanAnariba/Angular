import { Auth, User } from "../interfaces";
import { userModel } from "../models";

export class AuthService {

  public async createNewUser (user: User): Promise<User> {
    return await userModel.create(user);
  }

  public async loginUser (authUser: Auth): Promise<User | null> {
    return await userModel.findOne({email: authUser.email, status: true});
  }

}