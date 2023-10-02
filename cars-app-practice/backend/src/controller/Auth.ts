import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { errorHandle } from "../utils";
import { UserService } from "../services/users.service";
import { User } from "../interfaces";

export class AuthController {

  private static statusCode: number = 0;

  public static async signIn ({body}: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({data: 'works'})
    } catch (e) {
      AuthController.statusCode = ( AuthController.statusCode !== 0 ) ? AuthController.statusCode : 500;
      return errorHandle(res, AuthController.statusCode, e);
    }
  }

  public static async newAccount ({body}: Request, res: Response): Promise<Response> {
    try {
      
      const userService: UserService = new UserService();
      const authService: AuthService = new AuthService();
      const existsUser = await userService.findUser(body.email);
      if ( existsUser ) {
        AuthController.statusCode = 400;
        throw new Error(`User ${ body.email } already exists`);
      }
      const { firstName, lastName, email, password }: User = body;
      const dbResponse = await authService.createNewUser({ firstName, lastName, email, password });
      return res.status(201).json(dbResponse);
    } catch (e) {
      AuthController.statusCode = ( AuthController.statusCode !== 0 ) ? AuthController.statusCode : 500;
      return errorHandle(res, AuthController.statusCode, e);
    }
  }

}