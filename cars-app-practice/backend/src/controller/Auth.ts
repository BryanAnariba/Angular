import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { createJwt, encrypt, errorHandle, matchParams } from "../utils";
import { UserService } from "../services/users.service";
import { Auth, ExtendedRequest, User } from "../interfaces";

export class AuthController {

  private static statusCode: number = 0;

  public static async signIn ({body}: Request, res: Response): Promise<Response> {
    try {
      const { email, password }: Auth = body;
      const authService: AuthService = new AuthService();
      const dbResponse = await authService.loginUser({ email, password });
      if ( !dbResponse ) {
        AuthController.statusCode = 400;
        throw new Error( `User with email ${ email } not found` );
      }
      const isMatchPassword = matchParams(password, dbResponse.password);
      if ( !isMatchPassword ) {
        AuthController.statusCode = 400;
        throw new Error(`Invalid Credentials`);
      }
      AuthController.statusCode = 200;
      const token = createJwt(dbResponse);
      return res.status(200).json({
        token: token,
        user: dbResponse
      });
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
      const dbResponse = await authService.createNewUser({ firstName, lastName, email, password: encrypt(password) });
      const token = createJwt(dbResponse);
      return res.status(200).json({
        token: token,
        user: dbResponse
      });
    } catch (e) {
      AuthController.statusCode = ( AuthController.statusCode !== 0 ) ? AuthController.statusCode : 500;
      return errorHandle(res, AuthController.statusCode, e);
    }
  }

  public static async refreshToken(req: ExtendedRequest, res: Response) {
    try {
      const userService: UserService = new UserService();
      const existsUser = await userService.findUserById(`${req.user}`);
      if ( !existsUser ) {
        AuthController.statusCode = 401;
        throw new Error(`User does not exists`);
      }
      return res.status(200).json({
        token: createJwt(existsUser),
        user: existsUser
      });
    } catch (e) {
      AuthController.statusCode = ( AuthController.statusCode !== 0 ) ? AuthController.statusCode : 500;
      return errorHandle(res, AuthController.statusCode, e);
    }
  }

}