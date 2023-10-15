import { NextFunction, Request, Response } from "express";
import { errorHandle } from "../utils";
import { verify } from "jsonwebtoken";
import { ExtendedRequest, JwtPayloadModified } from "../interfaces";



export const checkJwt = (req: ExtendedRequest, res: Response, next: NextFunction) => {
  try {
    const jwt = `${req.headers.authorization}`;
    const token = `${jwt.split(' ').pop()}`;
    //console.log({jwt, token});
    const payload = verify(token, `${ process.env.JWT_SECRET }`) as JwtPayloadModified;
    if (!payload) {
      return errorHandle(res, 401, 'Invalid or Empty token');  
    }
    //console.log(payload);
    req.user = payload.id;
    next();
  } catch (e) {
    return errorHandle(res, 401, e);
  }
}