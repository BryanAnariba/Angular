import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface requestExtend extends Request {
    loggedUser?: LoggedUser | JwtPayload | any;
}

export interface LoggedUser {
    _id: string;
    role: string;
    email: string;
}